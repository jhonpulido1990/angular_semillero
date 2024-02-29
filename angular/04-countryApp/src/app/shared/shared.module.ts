import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    ContactComponent,
    HomePageComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
