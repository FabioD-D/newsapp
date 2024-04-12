import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { roles } from '../../../models/roles';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit{

  selectedRole!: string;
  roles = roles;
  editForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;
  nomePenna!: FormControl;
  user: User | null = null;

  constructor( private userService: UsersService,
    private fb: FormBuilder,
    private router: Router) {}

    ngOnInit() {
      this.userService.userLogged$.subscribe(user => {
        this.user = user
        console.log("USER", this.user);
      });
      this.username = new FormControl(this.user?.username, [Validators.required]);
      this.password = new FormControl(this.user?.password, [Validators.required]);
      if (this.user?.nomePenna) {
        this.nomePenna = new FormControl(this.user?.nomePenna, [Validators.required]);
      }

      this.editForm = this.fb.group({
        username: this.username,
        password: this.password,
        nomePenna: this.nomePenna != null ? this.nomePenna : ""
      });
    }

    edit() {
      this.userService.editUser(this.editForm.value.username, this.editForm.value.password, this.selectedRole, this.editForm.value.nomePenna).subscribe(user => {
        console.log("EDIT", user);
        this.userService.userLogged$.next(user);
        window.alert("User edited successfully");
        this.router.navigate(['/users/userdetails']);
      })
    }
  }