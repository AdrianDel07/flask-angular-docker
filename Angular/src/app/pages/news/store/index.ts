import {
  ActionReducer,
  ActionReducerMap,
  Action,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from "@ngrx/store";
import { environment } from "../../../../environments/environment";

import * as fromNews from './news.reducer';

export const newsStateFeatureKey = "State";

export interface NewsState {
  news: fromNews.NewsState;
}

export const reducers: ActionReducerMap<NewsState> = {
  news: fromNews.reducer,
};

export const selectNewsState = createFeatureSelector<fromNews.NewsState>('news');

export const selectAllNews = createSelector(
  selectNewsState,
  fromNews.selectAllNews
);

export const metaReducers: MetaReducer<NewsState>[] = !environment.production
  ? []
  : []
