import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term : '', countries: []},
    byCountries: { term : '', countries: []},
    byRegion: { region : '', countries: []},
  }

  constructor(private http: HttpClient) {}

  private getCountriesResquest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => of([])),
     /*  delay(2000) */
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesResquest(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term, countries } )
    )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesResquest(url);
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesResquest(url);
  }
}
