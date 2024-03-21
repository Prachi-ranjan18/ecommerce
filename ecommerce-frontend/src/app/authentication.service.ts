import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  [x: string]: any;
  constructor(private http: HttpClient) { }
  isAuthenticated(): boolean {
    // Check if the user is authenticated (e.g., by checking if the JWT token exists)
    const token = localStorage.getItem('token');
    return !!token; // Return true if the token exists, false otherwise
  }

  signup(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/auth/signup', userData);
  }

  login(loginData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/auth/login', loginData);
  }
}
