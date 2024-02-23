import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `<p>counter: {{ counter }}</p>

<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`
})
export class CounterComponent {

  counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += 1
  }
  resetCounter(): void {
    this.counter = 10;
  }
}
