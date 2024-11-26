import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  private apiUrl = 'https://localhost:7263/api/Home'; 

  constructor(private http: HttpClient) {}

  getGuardianDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GuardianDetails`);
  }
}
