import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, PostBook } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly baseURL = 'http://127.0.0.1:5000/api/v1/books'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL);
  }

  postBook(data: PostBook): Observable<Book> {
    return this.http.post<Book>(this.baseURL, data)
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`this.baseURL/${id}`)
  }

  updateBookById(id: string, data: Book): Observable<Book> {
    return this.http.put<Book>(`this.baseURL/${id}`, data)
  }

  deleteBookById(id: string): Observable<void> {
    return this.http.delete<void>(`this.baseURL/${id}`)
  }
}
