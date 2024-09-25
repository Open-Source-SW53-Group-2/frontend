import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  showPassword = false;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    // Lógica de registro
    this.authService.checkUserExists(this.email).subscribe(
      (users) => {
        if (users.length > 0) {
          alert('Ya existe una cuenta con este correo electrónico.');
        } else {
          const userData = { email: this.email, password: this.password };
          this.authService.register(userData).subscribe(
            () => {
              alert('Registro exitoso. Ahora puedes iniciar sesión.');
              this.router.navigate(['/']);
            },
            error => {
              console.error('Error al registrar', error);
            }
          );
        }
      },
      error => {
        console.error('Error al verificar usuario', error);
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
