import {Component, ViewChild} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {Storage} from "@ionic/storage-angular";
import {Router} from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { AlertController, IonSelect } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  @ViewChild('languageSelect')
  languageSelect!: IonSelect;

  dark = true;
  selectedLanguage=" string";

  constructor(private authService: AuthService, private router: Router, private storage: Storage,
    private translate: TranslateService, private alertController: AlertController) {
      this.selectedLanguage = 'en';
  
  }
  openLanguageSelect() {
    this.languageSelect.open();  }

  async languageChanged() {
    // Change the language and display a confirmation alert
    this.translate.use(this.selectedLanguage);
    const alert = await this.alertController.create({
      header: 'Language Changed',
      message: 'The language has been changed. Please restart the app to apply the changes.',
      buttons: ['OK']
    });
    await alert.present();
  }
  toggleDarkMode($event: { detail: { checked: any; }; }) {
    if ($event.detail.checked) {
      document.documentElement.style.setProperty('--ion-background-color', 'var(--ion-background-color-dark)');
      document.documentElement.style.setProperty('--ion-color', 'var(--ion-text-color-dark)');
      document.documentElement.style.setProperty('--ion-color-strong', 'var(--ion-color-dark-contrast)');
      document.documentElement.style.setProperty('--ion-color-contrast', 'var(--ion-color-dark)');
      document.documentElement.style.setProperty('--ion-item-background', 'var(--ion-background-color-dark)');
      document.documentElement.style.setProperty('--ion-toolbar-background', 'var(--ion-background-color-dark)');
    } else {
      document.documentElement.style.setProperty('--ion-background-color', 'var(--ion-background-color)');
      document.documentElement.style.setProperty('--ion-color', 'var(--ion-text-color)');
      document.documentElement.style.setProperty('--ion-color-strong', 'var(--ion-color-contrast)');
      document.documentElement.style.setProperty('--ion-color-contrast', 'var(--ion-background-color)');
      document.documentElement.style.setProperty('--ion-item-background', 'var(--ion-item-background)');
      document.documentElement.style.setProperty('--ion-toolbar-background', 'var(--ion-toolbar-background)');
    }
  }


  // Sign out
  async signOut() {
    // await this.storage.create();
    await this.storage.remove('mail');
    this.router.navigate(['/signin']);
  }

}
