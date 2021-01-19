import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { TABLE_DATA } from '../mock-table';

@Injectable({
  providedIn: 'root',
})
export class ServiceTableService {
  constructor(private http: HttpClient) {}

  getDataTableMocks(): Observable<any> {
    return of(TABLE_DATA);
  }

  getDataTableApi(url): Observable<any> {
    return this.http.get(url);
  }
}
