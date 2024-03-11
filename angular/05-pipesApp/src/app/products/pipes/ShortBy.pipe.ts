import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'ShortBy'
})
export class ShortByPipe implements PipeTransform {

  transform( herois: Hero[], sortBy?: keyof Hero | '' ): Hero[] {
    switch ( sortBy ) {
      case 'name':
      return herois.sort( (a,b) => (a.name > b.name) ? 1 : -1 );
      case 'canFly':
      return herois.sort( (a,b) => (a.canFly > b.canFly) ? 1 : -1 );
      case 'color':
      return herois.sort( (a,b) => (a.color > b.color) ? 1 : -1 );
      default:
      return herois;
    }
  }

}
