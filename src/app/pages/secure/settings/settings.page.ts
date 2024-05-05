import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {Storage} from "@ionic/storage-angular";
import {Router} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import {AlertController, IonSelect} from '@ionic/angular';
import {ProfileService} from "../../../services/Profile/profile.service";
import {LancerService} from "../../../services/Lancer/lancer.service";
import {Profile} from "../../../model/Profile";
import {Sexe} from "../../../model/Sexe";
import {Lancer} from "../../../model/Lancer";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit{
  @ViewChild('languageSelect')
  languageSelect!: IonSelect;
  gender: string = "";
  dark = true;
  selectedLanguage = " string";
  capturedImage: any;
  currentProfile: Profile = new Profile(
    false,
    "",
    "",
    "",
    "",
    0,
    "",
    "",
    new Date(),
    Sexe.Other,
    "",
    "",
    "",
    [],
    ""
  );

  currentLancer: Lancer =  new Lancer(
    "",
    0,
    [],
    ""
  );

  constructor(private authService: AuthService,
              private router: Router,
              private storage: Storage,
              private translate: TranslateService,
              private alertController: AlertController,
              private profileService: ProfileService,
              private lancerService: LancerService
              ) {
    this.selectedLanguage = 'en';

  }

  openLanguageSelect() {
    this.languageSelect.open();
  }

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

  async ngOnInit(){
    this.storage.create();
    const storedEmail = await this.storage.get('mail');
    this.profileService.profile_get_by_email_(storedEmail).subscribe(
      (result) => {
        this.currentProfile = result;
        if (result.photoProfile != "") {
          const imageUrl = `data:image/jpeg;base64,${result.photoProfile}`;
          this.capturedImage = imageUrl;
        }
        if(this.currentProfile.sexe == 2){
          this.gender = "Male";
        } else if(this.currentProfile.sexe == 1){
          this.gender = "Female";
        } else {
          this.gender = "Other";
        }
        this.lancerService.get_lancer_by_email_(result.email).subscribe(
          (res) => {
            this.currentLancer = res;
          }
        );
      }
    );
  }

  // Sign out
  async signOut() {
    // await this.storage.create();
    await this.storage.remove('mail');
    this.router.navigate(['/signin']);
  }

}
