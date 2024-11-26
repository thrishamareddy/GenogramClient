import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {
  addGuardian(value: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://localhost:7263/api/Guardian'; 

  constructor(private http: HttpClient) {}

  getGuardianDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GuardianDetails`);
  }
  addOrUpdateGuardian(id: number | null, guardian: any, childId: number | null): Observable<any> {
    const url = id
      ? `${this.apiUrl}/Guardian/${id}`
      : `${this.apiUrl}/Guardian`;
  
    if (childId) {
      guardian.childId = childId; 
    }
  
    return this.http.post(url, guardian, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
  
}
