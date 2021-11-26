import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { Book, PostBook } from '../models/books.model';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public book: Book | null, private bookService: BookService, public dialog: MatDialog) { }

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
      console.log('Edit Data');
      this.title.setValue(this.book.title);
      this.author.setValue(this.book.author);
      this.read.setValue(this.book.read ? 1 : 0);
    } else {
      console.log('Save Data');
    }
  }

  onSubmit(): void {
    this.btnLoading = true;
    console.log(JSON.stringify({ title: this.title.value, author: this.author.value, read: this.read.value }));
    const data: PostBook = { title: this.title.value, author: this.author.value, read: this.read.value }
    this.bookService.postBook(data).subscribe(() => {
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Error',
          description: 'No se ha podido guardar la información',
        }
      });
      this.btnLoading = false;
    }, (err: unknown) => {
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Error',
          description: 'No se ha podido guardar la información',
        }
      });
      this.btnLoading = false;
    });
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
    return !this.title.valid || !this.author.valid || !this.read.valid || this.btnLoading;
  }
}
