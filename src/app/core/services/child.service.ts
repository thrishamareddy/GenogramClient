import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private baseUrl = 'https://localhost:7263/api/Home';

  constructor(private http: HttpClient) {}

  getChildDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ChildDetails`);
  }
}
