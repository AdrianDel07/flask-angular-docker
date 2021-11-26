import { Component, OnInit } from '@angular/core';
import {NewsService} from './service/service.module';
import {News} from './models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent implements OnInit {
  //news$: Observable<News[]> = this.store.select(state => state.news)
  news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(nws => {
      this.news = nws;
    })
  }
}
