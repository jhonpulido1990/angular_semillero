import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegions: SmallCountry[] = [];
  public borders: string[] = []

  public myForm: FormGroup = this.fb.group({
    region : ['', Validators.required],
    country: ['', Validators.required],
    border : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  get regions(): Region[] {
    return this.countriesService.region;
  }

  onRegionChange(): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('country')!.setValue('') ),
      switchMap( region => this.countriesService.getCountriesByRegion(region) )
    )
    .subscribe((country) => {
      this.countriesByRegions = country;
    });
  }

  onCountryChange(): void {
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('border')!.setValue('') ),
      tap( () => this.borders = [] ),
      filter( (value:string) => value.length > 0 ),
      switchMap( (alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode) )
    )
    .subscribe( country => {
      this.borders = country.borders
    } );
  }
}
