import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'jhon jairo'
  public nameUpper: string = 'JHON JAIRO'
  public fullname: string = 'JhOn JaIrO'

  public customDate = new Date();
}
