import {
  Action,
  MetaReducer,
  createReducer,
  on
} from "@ngrx/store";
import { environment } from "../../../../environments/environment";
import { Book, BookModel } from "../models/books.model";
// import { loadBookSuccess, loadBookFailure } from "./books.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as BookActions from './books.actions';
import { state } from "@angular/animations";


export const adapter: EntityAdapter<BookModel> = createEntityAdapter<BookModel>();

export const initialState: BookModel = {
  title: 'Jack',
  author: 'Jack', 
  read: false
};

// const userReducer = createReducer(
//   initialState,
//   on(loadBookSuccess, (state, action) => {
//     return adapter.setAll(action.books, state);
//   }),
//   on(loadBookFailure, (state, action) => {
//     return action.error;
//   })
// );

// export function reducer(state: BookModel, action: Action) {
//   return userReducer(state, action);
// }


// export const getDataState = (state: BookState) => state.books;

export function bookReducer(state: BookModel[] = [initialState], action: BookActions.Actions) {
  switch (action.type) {
    case BookActions.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
}

// const {
//   selectEntities,
//   selectAll,
// } = adapter.getSelectors();

// export const selectBooksEntities = selectEntities;

// export const selectAllBooks = selectAll;

// export const booksStateFeatureKey = "books";

// export const metaReducers: MetaReducer<BookState>[] = !environment.production
//   ? []
//   : [];
