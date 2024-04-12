import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { userGuard } from './guards/user.guard';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { checkaddarticleGuard } from './guards/checkaddarticle.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'userdetails', component: UserDetailsComponent, canActivate: [userGuard]},
  { path: 'useredit', component: UserEditComponent, canActivate: [userGuard]},
  { path: 'addarticle', component: AddArticleComponent, canActivate: [userGuard, checkaddarticleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
