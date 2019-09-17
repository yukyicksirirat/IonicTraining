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

  register(user: User) {
    this.isLoggedIn = true;
    return of(user);
  }

  login(username: string, password: string) {
    let user = null;

    if (username === 'admin' && password === 'admin') {
      user = { username, roles: 'ADMIN' };
    } else {
      user = { username, roles: 'USER' };
    }

    this.isLoggedIn = true;

    // Normally you would store e.g. JWT
    this.storage.setItem('token', ACCESS_TOKEN);

    // Normally you would have a real user object at this point
    return of(user);
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
