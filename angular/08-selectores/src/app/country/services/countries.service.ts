import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, combineLatest, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = 'https://restcountries.com/v3.1'

  private _region: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ]

  constructor( private http: HttpClient ) { }

  get region(): Region[] {
    return [ ...this._region ]
  }

  getCountriesByRegion( region: Region ): Observable<SmallCountry[]> {
    if ( !region ) return of([]);

    const url: string = `${ this.baseUrl }/region/${ region }?fields=cca3,name,borders`
    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.map( country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }) ) )
    )
  }

  getCountryByAlphaCode( alphaCode: string ): Observable<SmallCountry> {
    const url = `${ this.baseUrl }/alpha/${ alphaCode }?fields=cca3,name,borders`
    return this.http.get<Country>(url)
    .pipe(
      map( countries => ({
        name: countries.name.common,
        cca3: countries.cca3,
        borders: countries.borders ?? []
      }) )
    )
  }

  getCountryBordersByCode( borders: string[] ): Observable<SmallCountry[]> {
    if ( !borders || borders.length === 0 ) return of([]);
    const countriesResquests: Observable<SmallCountry>[] = [];

    borders.forEach( code => {
      const request = this.getCountryByAlphaCode( code );
      countriesResquests.push( request );
    } )
    return combineLatest( countriesResquests )
  }
}
