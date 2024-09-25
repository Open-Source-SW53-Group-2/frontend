import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    // Lógica de inicio de sesión
    this.authService.login(this.email, this.password).subscribe(
      (users) => {
        if (users.length > 0) {
          alert('Inicio de sesión exitoso.');
          // Redirigir al usuario a la página principal o dashboard
        } else {
          alert('Correo o contraseña incorrectos.');
        }
      },
      error => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToRegister() {
    this.router.navigate(['/registro']);
  }
}
