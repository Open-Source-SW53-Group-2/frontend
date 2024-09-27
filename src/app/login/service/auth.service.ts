import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL base de la API (puedes modificar esta URL para que coincida con la de tu backend o JSON-Server)
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    // Aquí puedes utilizar el almacenamiento local o de sesión para verificar si el usuario está autenticado.
    // Por ejemplo, puedes verificar si existe un token de autenticación.
    const user = localStorage.getItem('authUser');
    return user !== null;
  }

  /**
   * Verifica si un usuario ya existe en la base de datos
   * @param email El correo electrónico a verificar
   * @returns Observable<boolean>
   */
  checkUserExists(email: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/users?email=${email}`)
      .pipe(
        map(users => users.length > 0 ? users : null) // Verifica si el usuario ya existe
      );
  }

  /**
   * Registra un nuevo usuario en la base de datos
   * @param userData Los datos del nuevo usuario (correo, contraseña, etc.)
   * @returns Observable<any>
   */
  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, userData); // Envía los datos del nuevo usuario al backend
  }

  /**
   * Inicia sesión verificando las credenciales del usuario
   * @param email El correo del usuario
   * @param password La contraseña del usuario
   * @returns Observable<any>
   */
  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseUrl}/users?email=${email}`)
      .pipe(
        map(users => {
          if (users.length > 0 && users[0].password === password) {
            // Credenciales correctas, guardar el usuario autenticado en localStorage
            localStorage.setItem('authUser', JSON.stringify(users[0]));
            return true;
          }
          return false;
        })
      );
  }

  /**
   * Simula el cierre de sesión del usuario (puedes implementar lógica más compleja aquí)
   */
  logout() {
    console.log('Usuario desconectado');
  }

}
