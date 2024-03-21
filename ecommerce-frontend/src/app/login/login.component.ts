import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: any = {};

  constructor(private authService: AuthenticationService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.loginForm).subscribe(
      response => {
        // Handle successful login
        // Store the token in local storage
        localStorage.setItem('token', response.token);
        // Redirect to the products page
        this.router.navigate(['/products']);
        console.log("Successfully loggedin",response.token);
      },
      error => {
        console.error('Login error:', error);
        // Handle login error, e.g., display an error message to the user
      }
    );
  }
}

