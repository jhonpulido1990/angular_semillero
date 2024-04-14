import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registerPage',
  templateUrl: './registerPage.component.html',
  styleUrls: ['./registerPage.component.css'],
})
export class RegisterPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor() {}

  ngOnInit() {}

  register() {
    const { email, password, name } = this.myForm.value;
    this.authService.register(email, name, password).subscribe({
      next: () => this.router.navigateByUrl('/auth/login'),
      error: (message) => Swal.fire('Error', message, 'error'),
    });
  }
}
