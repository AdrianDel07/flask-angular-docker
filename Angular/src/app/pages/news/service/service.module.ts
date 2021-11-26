import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { NewsState, getDataState } from '../store/news.reducer';
import { News} from '../models/news';


@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private store: Store<NewsState>, private http: HttpClient) {}

  baseUrl: string = "https://cms.qailumno.com/servicios/noticias";

  getNews() {
    return this.http.get<News[]>(this.baseUrl);
  }

  getData() {
    return this.store.select(getDataState);
  }
}
