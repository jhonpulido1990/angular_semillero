import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearchInput')
  public TagInput!: ElementRef<HTMLInputElement>;

  searchInput() {
    const newTag = this.TagInput.nativeElement.value;
    this.onValue.emit(newTag);
    this.TagInput.nativeElement.value = '';
  }

}
