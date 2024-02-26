import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public character: Character[] = [{
    name: 'Trunks',
    power:10
  }];

  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index?: string): void {
    if ( !index ) return;
    this.onDelete.emit(index)
  }
}
