import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  nombre: string = 'spiderman';
  edad: number = 32;

  get capitalizedName(): string {
    return this.nombre.toLocaleUpperCase()
  }

  getHeroDescription():string {
    return `${this.nombre} - ${this.edad}`
  }

}
