import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  public zoom: number = 13;
  public map?: Map;
  public currentLngt: LngLat = new LngLat(-74.08, 4.65);

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'Elemento no encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngt,
      zoom: this.zoom,
    });

    /* const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'jhon j puli';

    const marker = new Marker({
      color: 'red',
      element: markerHtml
    })
    .setLngLat(this.currentLngt)
    .addTo( this.map ) */

  }
}
