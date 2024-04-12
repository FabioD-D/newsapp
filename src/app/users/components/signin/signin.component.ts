import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { User } from '../../../models/user';
import { roles } from '../../../models/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;
  role: string = roles[0];

  constructor(private userService: UsersService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.username = new FormControl(null, [Validators.required])
    this.password = new FormControl(null, [Validators.required]);

    this.signinForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  signin(): void {
    console.log("SIGNIN", this.signinForm.value);
    let user: User = new User("", this.signinForm.value.username, this.signinForm.value.password,"", this.role);
    console.log("USER", user);
    this.userService.signIn(user).subscribe((res) => {
      if (res) {
        console.log("SIGNIN OK");
        this.route.navigate(['/users/login']);
      } else {
        window.alert("Errore nella fase di signin");
        console.log("SIGNIN KO");
      }
    })
  }


}
