import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {

  const userService: UsersService = inject(UsersService);
  const router: Router = inject(Router);

  if (userService.isLoggedIn)
    return true;
  else return router.parseUrl(userService.redirectNoAuthUrl);
};
