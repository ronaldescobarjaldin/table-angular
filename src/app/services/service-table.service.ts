import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {TABLA} from '../mock-tabla';

@Injectable({
  providedIn: 'root'
})
export class ServiceTableService {

  constructor(private http: HttpClient) { }

  getDataTableMocks(): Observable<any> {
    return of(TABLA);
  }

  getDataTableApi(url): Observable<any> {
    return this.http.get(url);
  }

}
