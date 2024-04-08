import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { User, UserSingleResponse } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  getUsersByID( id: number ): Observable<User> {
    return this.http.get<UserSingleResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map(response => response.data),
      tap(console.log)
    );
  }

}
