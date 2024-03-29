import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
/* import * as customValidator from '../../../shared/validators/validators'; */

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.firstNameAndLastnamePattern),
      ],
    ],
   /*  email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
      [ new EmailValidatorService() ],
    ], */
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
      [ this.emailvalidator ],
    ],
    username: ['', [Validators.required, this.validatorService.cantStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailvalidator: EmailValidatorService
  ) {}

  isValidField(field: string) {
    //todo: obtener validacion de un servicio
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSave() {
    this.myForm.markAllAsTouched();
  }
}
