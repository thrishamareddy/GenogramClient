
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  private childId: number | null = null;

  constructor(private http: HttpClient) {}

  private baseUrl = 'https://localhost:7263/api/Home';
  getChildDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ChildDetails`);
  }

  setChildId(id: number): void {
    this.childId = id;
  }

  getChildId(): number | null {
    return this.childId;
  }
}
