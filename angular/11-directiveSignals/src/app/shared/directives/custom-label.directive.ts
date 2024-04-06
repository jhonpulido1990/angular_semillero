import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = '';
  private _errors?: ValidationErrors | null | undefined;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    console.log(value);
    this.setErrors();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log('constructor de la directiva')
    // console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('Directiva oninit');
  }

  setStyle(): void {
    if (this.htmlElement) {
      this.htmlElement.nativeElement.style.color = this._color;
    }
  }

  setErrors(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if ( errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }

    if ( errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'Debe ser un email valido';
      return;
    }

    if ( errors.includes('minlength')) {
      this.htmlElement.nativeElement.innerHTML = `Debe tener al menos ${this._errors['minlength'].requiredLength} caracteres`;
      return;
    }

  }
}
