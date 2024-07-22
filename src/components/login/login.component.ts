import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 // styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authentificationService: AuthentificationService, private router: Router) {}

  onSubmit(): void {
    this.authentificationService.login(this.email, this.password).subscribe(response => {
      if (response.token) {
        this.router.navigate(['/dashboard']); // Redirigez vers le tableau de bord ou une autre page
      } else {
        alert('Login failed');
      }
    });
  }
}
