import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllCrimes(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/findAllCrime/list`, {});
  }

  getAllAdmins(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/findAllAdmin/admin`, {});
  }

  deleteCrime(crimeId: number): Observable<any> {
    const url = `${this.apiUrl}/delete/crime/:id${crimeId}`;
    return this.http.delete(url, { withCredentials: true });
  }

  getCrimeById(crimeId: number): Observable<any> {
    const url = `${this.apiUrl}/findCrime/${crimeId}`;
    return this.http.get(url);
  }
}
