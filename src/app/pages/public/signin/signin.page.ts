import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import {ProfileService} from "../../../services/Profile/profile.service";
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  current_year: number = new Date().getFullYear();

  // @ts-ignore
  signin_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private profileService: ProfileService,
    private storage: Storage
  ) { }

  async ngOnInit() {

    await this.storage.create();
    const storedEmail = await this.storage.get('mail');
    if(storedEmail != null){
      this.router.navigate(['/home']);
    }

    this.signin_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(4), Validators.required])]
    });
    this.storage.create();
  }

  // Sign in
  async signIn() {

    this.submit_attempt = true;

    // If email or password empty
    if (this.signin_form.value.email == '' || this.signin_form.value.password == '') {
      this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);

    } else {

      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: 'Please be patient! We\'re signing you in.',
        spinner: 'crescent'
      });
      await loading.present();

      // this.profileService.profile_write_(profile).subscribe(
      //   (result: { Status: string }) => {
      //     if (result.Status === 'Profile with this email already exists.') {
      //       // Handle case where profile with this email already exists
      //       this.toastService.presentToast('Error', 'A profile with this email already exists', 'top', 'danger', 4000);
      //       loading.dismiss();
      //     } else if (result.Status === 'Successfully Inserted.') {
      //       this.lancerService.lancer_write_(lancer).subscribe(
      //         (res) => {
      //           // Handle case where profile is successfully created
      //           this.toastService.presentToast('Success', 'YAAAY!!!, New Lancer Joined Us!', 'top', 'success', 2000);
      //           this.router.navigate(['/home']);
      //           loading.dismiss();
      //         }
      //       );
      //
      //     } else {
      //       this.toastService.presentToast('Error', 'We\'re Sorry, there is an error happend!', 'top', 'danger', 4000);
      //       loading.dismiss();
      //     }
      //
      //   }, (error) => {
      //     console.log(error);
      //   }
      // );

      this.profileService.profile_get_by_email_(this.signin_form.value.email).subscribe(
        (result) => {
          if (result && result.password === this.signin_form.value.password) {
            // Store user's email in local storage
            this.storage.set('mail', result.email);
            // Show success message
            this.toastService.presentToast('Success', 'Yoho! Welcome Back Lancer!', 'top', 'success', 2000);
            // Navigate to home page
            this.router.navigate(['/home']);
          } else {
            // Show error message for wrong credentials
            this.toastService.presentToast('Error', 'Wrong Credentials!', 'top', 'danger', 4000);
          }
        },
        (error) => {
          // Handle errors from profile_get_by_email_() method
          console.error('Error fetching profile by email:', error);
          // Show error message
          this.toastService.presentToast('Error', 'An error occurred while signing in!', 'top', 'danger', 4000);
        },
        () => {
          // Dismiss loading overlay when subscription completes (whether successful or not)
          loading.dismiss();
        }
      );


      // // Fake timeout
      // setTimeout(async () => {
      //   // Sign in success
      //   await this.router.navigate(['/home']);
      //   loading.dismiss();
      // }, 2000);
      // loading.dismiss();

    }
  }

}
