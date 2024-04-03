import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

interface MarkerAndColor {
  color: string;
  marker: Marker
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  public zoom: number = 13;
  public map?: Map;
  public currentLngt: LngLat = new LngLat(-74.08, 4.65);
  public listMarkers: MarkerAndColor[] = []

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'Elemento no encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngt,
      zoom: this.zoom,
    });

    this.readFromLocalStorage()

    /* const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'jhon j puli';

    const marker = new Marker({
      color: 'red',
      element: markerHtml
    })
    .setLngLat(this.currentLngt)
    .addTo( this.map ) */
  }

  createMarker() {
    if ( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker( lngLat, color );
  }

  addMarker( lngLat: LngLat, color: string ) {
    if ( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat( lngLat )
    .addTo( this.map );
    this.listMarkers.push({
      color,
      marker,
    })
    this.saveToLocalStorage();
  }

  deleteMarker( index : number ) {
    this.listMarkers[index].marker.remove();
    this.listMarkers.splice( index, 1)
  }

  flyTo( marker: Marker ) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.listMarkers.map( ({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    })

    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString );

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [ lng, lat ] = lngLat
      const coords = new LngLat( lng, lat );
      this.addMarker( coords, color )
    } )

  }
}
