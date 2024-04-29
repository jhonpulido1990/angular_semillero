import { Component, inject } from '@angular/core';
import { UsersService } from '@service/users.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public usersService = inject( UsersService )
}
