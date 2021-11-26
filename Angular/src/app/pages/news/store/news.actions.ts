import { createAction, props } from '@ngrx/store';
import { News } from '../models/news';

export const loadNews = createAction(
  "[News List] load News"
)

export const loadNewsSuccess = createAction(
  "[News List] load News",
  props<{news: News[]}>()
)

export const loadNewsFailure = createAction(
  "[News List] load News failure",
  props<{error: any}>()
)
