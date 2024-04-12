import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;

  constructor(private userService: UsersService,
    private route: Router) {}

  ngOnInit(): void {
    this.username = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null, [Validators.required]);

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  login(): void {
    this.userService.login(this.loginForm.value).pipe(take(1))
    .subscribe(() => {
      if (this.userService.isLoggedIn)
        {
          console.log("LOGIN OK");
          this.route.navigate(['/users/userdetails']);
        }
        else {
          window.alert("Errore nella fase di login");
        }
    })
  }
}
