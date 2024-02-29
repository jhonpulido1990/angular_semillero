import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-Image',
  templateUrl: './lazy-Image.component.html',
  styleUrls: ['./lazy-Image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required')
  }

  onLoad() {
    /* setTimeout(() => {
      this.hasLoaded = true
    }, 1000); */
    this.hasLoaded = true;
  }

}
