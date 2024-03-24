import { Component } from '@angular/core';

export interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { title: 'Basicos' , route: './reactive/basic'},
    { title: 'Dinamicos' , route: './reactive/dynamic' },
    { title: 'Switches' , route: './reactive/switches' }
  ];

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth' }
  ]
}
