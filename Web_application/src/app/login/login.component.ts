import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('https://your-api.com/login', this.user).subscribe(
      response => {
        console.log('Login successful', response);
        // Redirect or store token
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
