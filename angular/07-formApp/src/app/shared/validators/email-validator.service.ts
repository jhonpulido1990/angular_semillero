import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === 'jjpulido8@misena.edu.co') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
          return;
        }
        subscriber.next(null);
        subscriber.complete();
      }
    );
    return httpCallObservable;
  }
}
