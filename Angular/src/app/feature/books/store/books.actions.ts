import { Action, createAction, props } from '@ngrx/store';
import { Book, BookModel } from '../models/books.model';

export const loadBook = createAction(
  "[Book List] load Books"
)

export const loadBookSuccess = createAction(
  "[Book List] load Books",
  props<{books: BookModel[]}>()
)

export const loadBookFailure = createAction(
  "[Book List] load Books failure",
  props<{error: any}>()
)

export const ADD_BOOK = 'Add Book';

export class AddBook implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: BookModel) {}
}

export type Actions = AddBook;