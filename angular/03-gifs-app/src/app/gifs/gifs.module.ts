import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [HomeComponent, SearchBoxComponent, CardListComponent, GifsCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class GifsModule {}
