import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: any = {};

  constructor(private http: HttpClient,private router: Router) { }

  onSubmit() {
    this.http.post<any>('http://localhost:3000/api/auth/signup', this.signupForm)
      .subscribe(
        response => {
          // Handle successful signup
          console.log('Signup successful:', response);
          this.router.navigate(['/login']);
        },
        error => {
          // Handle signup error
          console.error('Signup error:', error);
        }
      );
  }
}
