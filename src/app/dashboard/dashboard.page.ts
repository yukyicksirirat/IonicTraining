import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthService,
              private storage: StorageService) { }

  ngOnInit() {
    this.storage.get(this.authService.loggedInUser.username).then(data => {
      console.log('user ', data);
    });
  }

}
