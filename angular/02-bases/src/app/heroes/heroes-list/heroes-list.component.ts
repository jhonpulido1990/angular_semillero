import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'she Hulk', 'Thor'];
  public deletedName?: string;

  removeLastHero(): void {
    this.deletedName = this.heroNames.pop()
  }
}
