import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor( private authservice: AuthService, private router: Router ) {}

  onLogin(): void {
    this.authservice.login('jhonpulido@hotmail.com', '123456')
    .subscribe( result => {
      this.router.navigate(['/'])
    } )
  }
}
