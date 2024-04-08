import { Component, computed, signal, effect, OnDestroy } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent implements OnDestroy {
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public fullname = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public userChangedEffect = effect(() => {
    console.log('User changed!');
    console.log(this.user().first_name);
  });

  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }

  onFieldUpdate(field: keyof User, value: string) {
    console.log(`Field ${field} updated to ${value}`);
    /* this.user.set({
      ...this.user(),
      [field]: value,
    }) */

    /* this.user.update(current => ({
      ...current,
      [field]: value,
    })) */

    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number(value);
          break;

        default:
          break;
      }
      return current;
    });
  }
}
