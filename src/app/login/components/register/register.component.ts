import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    FormsModule,
    MatInput,
    MatButton
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    // Lógica de registro con JSON-SERVER
    this.authService.register(this.username, this.email, this.password).subscribe(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    });


  }
}
