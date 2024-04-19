import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { DomSanitizer } from '@angular/platform-browser';


const { Camera } = Plugins;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Ionic', 'Firebase'];
  porotfolios: string[] = [];

  // @ts-ignore
  edit_profile_form: FormGroup;
  submit_attempt: boolean = false;
  capturedImage: any;
  defaultImage = '../../../../assets/card-media.png';
  

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit() {

    // Setup form
    this.edit_profile_form = this.formBuilder.group({
      name_first: ['', Validators.required],
      name_last: ['', Validators.required],
      email: ['', Validators.required]
    });

    // DEBUG: Prefill inputs
    // @ts-ignore
    this.edit_profile_form.get('name_first').setValue('John');
    // @ts-ignore
    this.edit_profile_form.get('name_last').setValue('Doe');
  }

  // Update profile picture
  async updateProfilePicture() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose existing picture or take new',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Choose from gallery',
          icon: 'images',
          handler: async () => {
           
              const image = await Camera['getPhoto']({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Base64,
                source: CameraSource.Photos // Utiliser la galerie
              });
              
              const imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpeg;base64,${image.base64String}`);
              this.capturedImage = imageUrl;
          
              
           
          }
        },
        {
          text: 'Take picture',
          icon: 'camera',
          handler: async () => {
            const image = await Camera['getPhoto']({
              quality: 90,
              allowEditing: false,
              resultType: CameraResultType.Uri
            });
  
            // Utiliser l'URI de l'image capturée (image.webPath) comme bon vous semble
  
            // Par exemple, pour afficher l'image dans votre application :
            this.capturedImage = image.webPath;
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
  
    await actionSheet.present();
  }
  // Submit form
  submit() {

    this.submit_attempt = true;

    // If form valid
    if (this.edit_profile_form.valid) {

      // Save form ...

      // Display success message and go back
      this.toastService.presentToast('Success', 'Profile saved', 'top', 'success', 2000);
      this.navController.back();

    } else {

      // Display error message
      this.toastService.presentToast('Error', 'Please fill in all required fields', 'top', 'danger', 2000);
    }
  }

}
