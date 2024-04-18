import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  content_loaded: boolean = false;
  isUserLoggedIn: boolean;
  constructor(
    private storage: Storage ,private authService: AuthService
  ) {
    this.isUserLoggedIn = this.authService.isLoggedIn();

  }

  async ngOnInit() {

    await this.storage.create();
    const storedEmail = await this.storage.get('mail');
    this.isUserLoggedIn = storedEmail != null;
  }

}
