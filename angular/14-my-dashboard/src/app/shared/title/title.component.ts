import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html'
})
export class TitleComponent {
  @Input({required: true}) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
