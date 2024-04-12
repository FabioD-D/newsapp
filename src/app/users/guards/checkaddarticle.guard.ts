import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';
import { take } from 'rxjs';

export const checkaddarticleGuard: CanActivateFn = (route, state) => {

  const userService: UsersService = inject(UsersService);
  const router: Router = inject(Router);

  userService.userLogged$.pipe(take(1)).subscribe(user => {
    if (user?.role !== 'Scrittore') {
      return false;
    } else return true;
  })
  return true;
};
