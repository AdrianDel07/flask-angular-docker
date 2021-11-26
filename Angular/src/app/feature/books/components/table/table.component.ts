import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../../add/add.component';
import { Book } from '../../models/books.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  headElements = [
    { name: 'Title', size: 25 },
    { name: 'Author', size: 25 },
    { name: 'Read', size: 10 },
    { name: 'Action', size: 20 },
  ];

  books: Book[] = [];

  constructor(private readonly dialog: MatDialog, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => this.books = data);
  }

  onPressDelete(id: string): void {
    console.log(id)
  }

  onPressEdit(data: Book): void {
    this.dialog.open(AddComponent, {
      data
    });
  }

}
