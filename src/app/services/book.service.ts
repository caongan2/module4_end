import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<any> {
    return this.http.get('http://localhost:3000/books/')
  }

  create(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/books/', data)
  }

  destroy(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/books/' + id)
  }

  update(data: any, id: number) {
    return this.http.put('http://localhost:3000/books/' + id, data)
  }

  getBookById(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/books/' + id)
  }

}
