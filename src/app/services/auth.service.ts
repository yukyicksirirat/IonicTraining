import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

const ACCESS_TOKEN = 'authentication-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  loggedInUser: User;

  constructor(
    private storage: StorageService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.isAuthenticated();
    });
  }

  getCurrentUser() {
    return of(this.loggedInUser);
  }

  register(user: User) {
    this.isLoggedIn = true;
    return of(user);
  }

  login(username: string, password: string) {
    let user = null;

    if (username.toLowerCase() === 'admin' && password === 'admin') {
      user = { username, roles: 'ADMIN' };
    } else if (username.toLowerCase() === 'user' && password === 'user') {
      user = { username, roles: 'USER' };
    }

    this.isLoggedIn = true;
    this.loggedInUser = user;

    // Normally you would store e.g. JWT
    this.storage.setItem('token', ACCESS_TOKEN);

    // Normally you would have a real user object at this point
    return of(this.loggedInUser);
  }

  logout() {
    this.isLoggedIn = false;
    this.loggedInUser = null;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
