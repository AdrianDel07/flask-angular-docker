import {
  Action,
  MetaReducer,
  createReducer,
  on
} from "@ngrx/store";
import { environment } from "../../../../environments/environment";
import { News } from "../models/news";
import { loadNewsSuccess, loadNewsFailure } from "./news.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface NewsState extends EntityState<News> {
  items: []
}

export const adapter: EntityAdapter<News> = createEntityAdapter<News>();

export const initialState: NewsState = adapter.getInitialState({
  items: []
});

const userReducer = createReducer(
  initialState,
  on(loadNewsSuccess, (state, action) => {
    return adapter.setAll(action.news, state);
  }),
  on(loadNewsFailure, (state, action) => {
    return action.error;
  })
);

export function reducer(state: NewsState | undefined, action: Action) {
  return userReducer(state, action);
}
export const getDataState = (state: NewsState) => state.items;

const {
  selectEntities,
  selectAll,
} = adapter.getSelectors();

export const selectNewsEntities = selectEntities;

export const selectAllNews = selectAll;

export const newsStateFeatureKey = "news";

export const metaReducers: MetaReducer<NewsState>[] = !environment.production
  ? []
  : [];
