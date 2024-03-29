import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {
  validate(control: AbstractControl<any, any>): | Observable<ValidationErrors | null> {
    const email = control.value;
    return of({
      emailTaken: true
    })
  }

}
