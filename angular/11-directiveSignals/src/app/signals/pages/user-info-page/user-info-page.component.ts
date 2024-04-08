import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersserviceService } from '../../services/usersservice.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent implements OnInit {

  private userService = inject(UsersserviceService);
  public userId = signal(1);

  currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });


  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id: number) {
    if (id <= 0)return;
    this.userId.set(id);
    this.currentUser.set(undefined);
    this.userService.getUsersByID(id)
    .subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.currentUser.set(undefined);
        this.userWasFound.set(false);
      },
    });
  }
}
