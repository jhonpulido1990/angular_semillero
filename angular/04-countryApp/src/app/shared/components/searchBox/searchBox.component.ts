import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

}
