import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{

  user: User | null = null;

  constructor(private userService: UsersService,
    private route: Router) {}

    ngOnInit() {
      this.userService.userLogged$.subscribe(user => {
        this.user = user;
      })
    }

    goToEditUser() {
      this.route.navigate(['/users/useredit']);
    }

}
