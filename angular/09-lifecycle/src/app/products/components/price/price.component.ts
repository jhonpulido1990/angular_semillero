import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  ngOnInit(): void {
    console.log('Componente Hijo: ngOninit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo: ngOnChanges');
    console.log({ changes })
  }
  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy');
  }

}
