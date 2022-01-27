import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { Book, BookModel } from '../models/books.model';
import { BookService } from '../service/book.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public book: Book | null,
    private bookService: BookService,
    public dialog: MatDialog,
    private store: Store
  ) {}

  btnLoading = false;

  title = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9]+[a-zA-Z0-9 ]+'),
  ]);
  author = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9.]+[a-zA-Z0-9. ]+'),
  ]);
  read = new FormControl('', [Validators.required]);

  reads: { id: number; label: string }[] = [
    { id: 0, label: 'No' },
    { id: 1, label: 'Yes' },
  ];

  textTitle: string = this.book ? 'Edit Book' : 'Add Book';

  ngOnInit(): void {
    if (this.book) {
      this.title.setValue(this.book.title);
      this.author.setValue(this.book.author);
      this.read.setValue(this.book.read ? 1 : 0);
    }
  }

  onSubmit(): void {
    this.btnLoading = true;

    const book: BookModel = {
      title: this.title.value,
      author: this.author.value,
      read: this.read.value,
    };
    if (this.book) {
      this.editBook(this.book.id, book);
      this.btnLoading = false;
    } else {
      this.saveBook(book);
      this.btnLoading = false;
    }
  }

  saveBook(book: BookModel): void {
    this.bookService.postBook(book).subscribe(
      () => {
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Success',
            description: 'the information was saved success',
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (err: unknown) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Error',
            description: 'the information could not be saved',
          },
        });
      }
    );
  }

  editBook(id: string, book: BookModel): void {
    this.bookService.updateBookById(id, book).subscribe(
      () => {
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Success',
            description: 'the information was saved success',
          },
        });
        this.btnLoading = false;
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (err: unknown) => {
        this.dialog.open(DialogComponent, {
          data: {
            title: 'Error',
            description: 'the information could not be saved',
          },
        });
        this.btnLoading = false;
      }
    );
  }

  getErrorMessageTitle() {
    if (this.title.hasError('required')) {
      return 'this field is required, enter title Book';
    }
    return this.title.hasError('pattern') ? 'only text, numbers and dots' : '';
  }

  getErrorMessageAuthor() {
    if (this.author.hasError('required')) {
      return 'this field is required, enter author Book';
    }
    return this.author.hasError('pattern') ? 'only text, numbers and dots' : '';
  }

  getErrorMessageRead() {
    if (this.read.hasError('required')) {
      return 'this field is required, select a option';
    }
    return '';
  }

  validateInputs() {
    return (
      !this.title.valid ||
      !this.author.valid ||
      !this.read.valid ||
      this.btnLoading
    );
  }
}
