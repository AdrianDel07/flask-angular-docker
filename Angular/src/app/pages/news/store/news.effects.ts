import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { NewsService } from "../service/service.module";
import * as fromNewsActions from "./news.actions";
import { of } from "rxjs";

@Injectable()
export class NewsEffects {
  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromNewsActions.loadNews),
      mergeMap(() =>
        this.newsService.getNews().pipe(
          map(news => fromNewsActions.loadNewsSuccess({ news })),
          catchError(error =>
            of(fromNewsActions.loadNewsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private newsService: NewsService
  ) {}
}
