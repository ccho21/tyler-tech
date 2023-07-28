import { Component } from '@angular/core';
import { UserAddress } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user?: UserAddress;
  title = 'tyler-test';

  getUser(user: UserAddress) {
    console.log('### user', user);
    this.user = user;
  }
}
