import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AddComponent } from '../../add/add.component';
import { Book } from '../../models/books.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  headElements = [
    { name: 'Title', size: 25 },
    { name: 'Author', size: 25 },
    { name: 'Read', size: 10 },
    { name: 'Action', size: 20 },
  ];

  books: Book[] = [];

  constructor(
    private readonly dialog: MatDialog,
    private bookService: BookService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(nws => {
      this.books = nws;
    })
  }

  onPressDelete(id: string): void {
    this.bookService.deleteBookById(id).subscribe(
      () => {
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Success',
            description: 'the information was delete success',
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (err) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Error',
            description: 'the information could not be delete',
          },
        });
      }
    );
  }

  onPressEdit(data: Book): void {
    this.dialog.open(AddComponent, {
      data,
    });
  }
}
