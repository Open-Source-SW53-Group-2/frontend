import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL de tu JSON-SERVER

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(
        map((users) => {
          if (users.length > 0) {
            // Simular almacenamiento de token
            localStorage.setItem('token', 'fake-jwt-token');
            this.router.navigate(['/app']);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, {
      username: username,
      email: email,
      password: password
    });
  }
}
