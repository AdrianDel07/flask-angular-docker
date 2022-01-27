import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as fromBooksActions from './books.actions';
import { of } from 'rxjs';
import { BookService } from '../service/book.service';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookService: BookService) {}

  loadBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBooksActions.loadBook),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map((books) => fromBooksActions.loadBookSuccess({ books })),
          catchError((error) => of(fromBooksActions.loadBookFailure({ error })))
        )
      )
    )
  );
}
