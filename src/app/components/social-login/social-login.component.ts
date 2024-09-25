import { Component } from '@angular/core';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  standalone: true,
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent {
  onGoogleLogin() {
    alert('Funcionalidad de inicio de sesión con Google no implementada.');
  }

  onFacebookLogin() {
    alert('Funcionalidad de inicio de sesión con Facebook no implementada.');
  }

  onAppleLogin() {
    alert('Funcionalidad de inicio de sesión con Apple no implementada.');
  }
}
