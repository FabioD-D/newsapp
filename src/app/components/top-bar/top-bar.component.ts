import { Component } from '@angular/core';
import { UsersService } from '../../users/services/users.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  isNotLogged: boolean = true;

  constructor(private userService: UsersService) {
    userService.isUserLogged().subscribe((res) => {
      this.isNotLogged = !res;
    });
  }

  logout(): void {
    this.userService.logout();
  }

}
