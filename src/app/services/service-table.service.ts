import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { SUBJECT_DATA, TABLE_DATA } from '../mock-table';

@Injectable({
  providedIn: 'root',
})
export class ServiceTableService {
  constructor(private http: HttpClient) {}

  getDataTableMocks(): Observable<any> {
    return of(TABLE_DATA);
  }

  getSubjectTableMocks(): Observable<any> {
    return of(SUBJECT_DATA);
  }

  getDataTableApi(url): Observable<any> {
    return this.http.get(url);
  }

}
