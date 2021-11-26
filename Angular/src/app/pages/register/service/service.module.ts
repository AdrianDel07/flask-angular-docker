import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'})

  export class UserService {
    baseUrl: string = 'https://cms.qailumno.com/servicios/programas';
    url_register: string = 'https://cms.qailumno.com/servicios/registro';

    constructor (private http: HttpClient) {}

    getSelectProgram(): Observable<any> {
      return this.http.get<any>(this.baseUrl);
    }

    postUserData(data: any){
      return this.http.post<any>(this.url_register, data);
    }
  }
