import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  content_loaded: boolean = false;

  constructor(
    private storage: Storage
  ) {
  }

  async ngOnInit() {

    await this.storage.create();
    const storedEmail = await this.storage.get('mail');

  }

}
