import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {  AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;


 


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  implements OnInit {
  @ViewChild('slick', { static: false }) slick: ElementRef | null = null ;

  services = [
    { name: 'Angular', date: '09.04.2023', price: ' $7.50' },
    { name: 'Graphic Designer', date: '06.03.2023', price: '$7500' },
    { name: 'Python Programmer', date: '03.02.2023', price: ' $1800.00' },
    { name: 'HTML Programmer', date: '03.02.2023', price: ' $1800.00' }
  ];
//selectedService: { name: string; date: string; price: string; } | undefined;
  slideconfig={
    slideToshow :1,
    slideToScroll :1,
    dots :true
  }
  content_loaded: boolean = false;
  isUserLoggedIn: boolean;
  constructor(
    private storage: Storage ,private authService: AuthService ,private elementRef: ElementRef
  ) {
    this.isUserLoggedIn = this.authService.isLoggedIn();

  }

  async ngOnInit() {

    await this.storage.create();
    const storedEmail = await this.storage.get('mail');
    this.isUserLoggedIn = storedEmail != null;
  }
  ngAfterViewInit() {
    $(this.elementRef.nativeElement).find('.slick-carousel').slick({
      slidesToShow: 3, // Afficher 3 images à la fois
      slidesToScroll: 1, // Faire défiler une image à la fois
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}
