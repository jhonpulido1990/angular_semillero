import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCasePipe'
})

export class ToogleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
