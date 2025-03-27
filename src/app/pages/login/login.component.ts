import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login({username: this.username, password: this.password}).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.access);
        this.router.navigate(['/projects']);
      },
      error: () => this.errorMessage = 'Credenciales inválidas. Intenta nuevamente.'
    });
  }
}