import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookModel } from '../models/books.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly baseURL = 'http://127.0.0.1:5000/api/v1/books';
  private readonly options = {
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    }
  };

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL, this.options);
  }

  postBook(data: BookModel): Observable<Book> {
    return this.http.post<Book>(this.baseURL, data, this.options);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseURL}/${id}`, this.options);
  }

  updateBookById(id: string, data: BookModel): Observable<Book> {
    return this.http.put<Book>(`${this.baseURL}/${id}`, data);
  }

  deleteBookById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`, this.options);
  }
}
