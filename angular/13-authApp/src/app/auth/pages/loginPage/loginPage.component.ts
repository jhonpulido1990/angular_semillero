import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ['jjpulido9@misena.edu.co', [Validators.required, Validators.email]],
    password: ['123456789', [Validators.required, Validators.minLength(6)]]
  })

  constructor() { }

  ngOnInit() {
  }

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => Swal.fire('Error', message, 'error')
      })
  }

}
