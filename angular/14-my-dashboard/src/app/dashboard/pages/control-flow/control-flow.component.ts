import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('B');
  public frameword = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameword2 = signal(['Angular','Vue','Svelte','Qwik','React']);

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
