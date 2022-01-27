import { EntityState } from "@ngrx/entity";
import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../../../environments/environment";
import { BookModel } from "../models/books.model";

import * as fromBook from './books.reducer';

// export const newsStateFeatureKey = "State";

export interface BookState extends EntityState<BookModel> {
  readonly books: BookModel[];
}

// export const selectNewsState = createFeatureSelector<fromBook.BookState>('books');


// export const metaReducers: MetaReducer<BookState>[] = !environment.production
//   ? []
//   : []
