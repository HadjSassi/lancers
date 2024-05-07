import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  content_loaded: boolean = false;

  constructor() { }

  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }}
