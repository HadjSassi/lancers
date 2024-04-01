import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {AuthService} from 'src/app/services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from 'src/app/services/toast/toast.service';
import {Router} from '@angular/router';
import {LancerService} from "../../../services/Lancer/lancer.service";
import {ProfileService} from "../../../services/Profile/profile.service";
import {Profile} from "../../../model/Profile";
import {Sexe} from "../../../model/Sexe";
import {Lancer} from "../../../model/Lancer";
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  current_year: number = new Date().getFullYear();

  // @ts-ignore
  signup_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private lancerService: LancerService,
    private profileService: ProfileService,
    private storage: Storage
  ) {
  }

  ngOnInit() {
    // Setup form
    this.signup_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
      password_repeat: ['', Validators.compose([Validators.minLength(4), Validators.required])]
    });
    this.storage.create();

  }

  // Sign up
  async signUp() {

    this.submit_attempt = true;

    if (this.signup_form.value.email == '' || this.signup_form.value.password == '' || this.signup_form.value.password_repeat == '') {
      this.toastService.presentToast('Error', 'Please fill in all fields', 'top', 'danger', 4000);

      // If passwords do not match
    } else if (!this.signup_form.get('email')?.valid) {
      this.toastService.presentToast('Error', 'Please enter a valid email address', 'top', 'danger', 4000);

    } else if (this.signup_form.value.password != this.signup_form.value.password_repeat) {
      this.toastService.presentToast('Error', 'Passwords must match', 'top', 'danger', 4000);

    } else {

      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: 'Please Be Patient. We\'re singing you up.',
        spinner: 'crescent'
      });
      await loading.present();

      const profile: Profile = new Profile(
        false,
        this.signup_form.value.email,
        this.signup_form.value.password,
        this.signup_form.value.email.split('@')[0],
        this.signup_form.value.email.split('@')[0],
        0,
        "",
        "",
        new Date(),
        Sexe.Other,
        "",
        "",
        "",
        [],
        "",
      );

      const lancer: Lancer = new Lancer(
        this.signup_form.value.email,
        0,
        [],
        "",
      );

      //inserting a new profile and a new lancer in the app
      this.profileService.profile_write_(profile).subscribe(
        (result: { Status: string }) => {
          if (result.Status === 'Profile with this email already exists.') {
            // Handle case where profile with this email already exists
            this.toastService.presentToast('Error', 'A profile with this email already exists', 'top', 'danger', 4000);
            loading.dismiss();
          } else if (result.Status === 'Successfully Inserted.') {
            this.lancerService.lancer_write_(lancer).subscribe(
              (res) => {
                // Handle case where profile is successfully created
                this.storage.set('mail', res.email);
                this.toastService.presentToast('Success', 'YAAAY!!!, New Lancer Joined Us!', 'top', 'success', 2000);
                this.router.navigate(['/home']);
                loading.dismiss();
              }
            );

          } else {
            this.toastService.presentToast('Error', 'We\'re Sorry, there is an error happend!', 'top', 'danger', 4000);
            loading.dismiss();
          }

        }, (error) => {
          console.log(error);
        }
      );

    }
  }

}
