import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  getAllCrimes(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/findAllCrime/list`, {}).pipe(
      catchError(this.handleError)
    );
  }

  getAllAdmins(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/findAllAdmin/admin`, {}).pipe(
      catchError(this.handleError)
    );
  }

  getCrimeById(id: number): Observable<any> {
    const url = `${this.apiUrl}/findCrime/${id}`;
    return this.http.get(url);
  }

  updateCrime(id: number, updatedCrimeData: any): Observable<any> {
    const url = `${this.apiUrl}/update/crime/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, updatedCrimeData, { headers });
  }
}
