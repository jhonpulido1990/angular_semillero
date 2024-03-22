import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): boolean | Observable<boolean> => {
  //se inyectan el AuthService y el Router
  const authService = inject(AuthService);
  const router: Router = inject(Router);


  return authService.checkAutentication()
  .pipe(
    tap( (isAutenticated) => {
      if(isAutenticated) {
        router.navigate(['./'])
      }
    } ),
    map( isAutentticated => !isAutentticated)
  )
};

//No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing
export const canActivateGuard1: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  /* console.log('CanActivate');
  console.log({ route, state }); */

  return checkAuthStatus();
};

export const canMatchGuard1: CanMatchFn = ( //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {
  /* console.log('CanMatch');
  console.log({ route, segments }); */

  return checkAuthStatus();
};
