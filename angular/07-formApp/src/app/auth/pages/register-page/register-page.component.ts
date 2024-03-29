import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidator from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( customValidator.firstNameAndLastnamePattern ) ]],
    email: ['', [ Validators.required, Validators.pattern(customValidator.emailPattern) ]],
    username: ['', [ Validators.required, customValidator.cantStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]]
  })

  constructor( private fb: FormBuilder ) {}

  isValidField( field: string ){
    //todo: obtener validacion de un servicio
  }

  onSave() {
    this.myForm.markAllAsTouched();
  }
}
