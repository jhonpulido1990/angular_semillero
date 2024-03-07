import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent implements OnInit {

  private debocer = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearchInput')
  public TagInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.debocer
    .pipe(
      debounceTime(1000)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    } )
  }

  searchInput() {
    const newTag = this.TagInput.nativeElement.value;
    this.onValue.emit(newTag);
    this.TagInput.nativeElement.value = '';
  }

  onKeyPress( serachTerm: string ){
    this.debocer.next( serachTerm )
  }

}
