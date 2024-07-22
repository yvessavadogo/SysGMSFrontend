import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent {
    email:string = '';
    password:string='';

	rememberMe: boolean = false;

	constructor(private layoutService: LayoutService,
        private authentificationService: AuthentificationService, private router: Router

    ) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

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
