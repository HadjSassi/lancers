import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  services = [
    { name: 'Angular', date: '09.04.2023', price: ' $7.50' },
    { name: 'Graphic Designer', date: '06.03.2023', price: '$7500' },
    { name: 'Python Programmer', date: '03.02.2023', price: ' $1800.00' },
    { name: 'HTML Programmer', date: '03.02.2023', price: ' $1800.00' }
  ];
  selectedService: { name: string; date: string; price: string; } | undefined;

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
