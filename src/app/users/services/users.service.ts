import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  redirectNoAuthUrl: string = '/users/login';
  lastUsedId: number = 0;
  isLoggedIn: boolean = false;
  apiUrl: string = "http://localhost:3000";
  userLogged$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient,
    private router: Router
  ) { 
    this.retrieveLastUsedId();
  }

  isUserLogged(): Observable<boolean> {
    return this.userLogged$.pipe(map(user => user !== null));
  }

  editUser(username: string, password: string, role: string, nomePenna: string): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/user/${this.userLogged$.value?.id}`, {
      username: username,
      password: password,
      nomePenna: nomePenna,
      role: role
    }).pipe(take(1))
  }

  getUserLogged(): Observable<User | null> {
    return this.userLogged$.pipe(user => user);
  }

  retrieveLastUsedId() {
    this.http.get<Array<User>>(`${this.apiUrl}/user`).pipe(map(user => {
      console.log("Ci entro")
      let id = 0 
      for (let us of user) {
        if (id < parseInt(us.id)) {
            id = parseInt(us.id);
        }
        console.log(id);
        id = 0 ? this.lastUsedId = 0 : this.lastUsedId = id;    
      }
    })).subscribe()

  }

  signIn(user: User): Observable<User> {
    this.retrieveLastUsedId();
    user.id = (this.lastUsedId + 1).toString();
    return this.http.post<User>(`${this.apiUrl}/user`, user).pipe(map(user => {
      this.lastUsedId++;
      return user;
    }))
  }

  login(user: User): Observable<boolean> {
    return this.checkCredentials(user).pipe(map((res) => {
      if (res) {
        this.userLogged$.next(res);
        this.isLoggedIn = true;
        return true;
      } else {
        this.userLogged$.next(null);
        this.isLoggedIn = false;
        return false;
      }
    }))
    
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userLogged$.next(null);
    this.router.navigate(['/users/login']);
  }

  checkCredentials(user: User): Observable<User> {
    return this.http.get<Array<User>>(`${this.apiUrl}/user`, {
      params: {
        username: user.username,
        password: user.password
      }
    }).pipe(map(user => user[0]))
  }

}
