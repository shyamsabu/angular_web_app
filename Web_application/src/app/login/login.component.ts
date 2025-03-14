import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'admin@example.com' && this.password === 'password') {
      localStorage.setItem('user', this.email);
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    } else {
      alert('Invalid credentials');
    }
  }
}