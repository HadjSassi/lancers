import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CameraResultType, CameraSource} from '@capacitor/camera';
import {Plugins} from '@capacitor/core';
import {ActionSheetController, NavController} from '@ionic/angular';
import {ToastService} from 'src/app/services/toast/toast.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ProfileService} from "../../../../services/Profile/profile.service";
import {Storage} from "@ionic/storage-angular";
import {Profile} from "../../../../model/Profile";
import {Sexe} from "../../../../model/Sexe";
import {Lancer} from "../../../../model/Lancer";
import {LancerService} from "../../../../services/Lancer/lancer.service";
import {Skill} from "../../../../model/Skill";


const { Camera } = Plugins;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  // @ts-ignore
  edit_profile_form: FormGroup;
  submit_attempt: boolean = false;
  capturedImage: any;
  defaultImage = '../../../../assets/card-media.png';
  newLink :string = "";
  newSkill :string = "";
  gender: string = "";

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

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private sanitizer: DomSanitizer,
    private profileService: ProfileService,
    private lancerService: LancerService,
    private storage: Storage
  ) { }

  async ngOnInit() {

    // Setup form
    this.edit_profile_form = this.formBuilder.group({
      name_first: ['', Validators.required],
      name_last: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      // dateOfBirth: ['', Validators.required],
      Fonction: [''],
      phone: [''],
      address: [''],
      Facebook: [''],
      LinkedIn: [''],
      GitHub: [''],

    });
    this.storage.create();
    const storedEmail = await this.storage.get('mail');
    this.profileService.profile_get_by_email_(storedEmail).subscribe(
      (result) => {
          this.currentProfile = result;
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

    if (this.gender === "Male") {
      this.currentProfile.sexe = 2;
    } else if (this.gender === "Female") {
      this.currentProfile.sexe = 1;
    } else {
      this.currentProfile.sexe = 0;
    }

    this.submit_attempt = true;

    // If form valid
    if (this.edit_profile_form.valid) {

      // Save form ...
      this.lancerService.lancer_update_(this.currentProfile.email,this.currentLancer).subscribe(
        (re) => {
          this.profileService.profile_update_(this.currentLancer.email,this.currentProfile).subscribe(
            (ree) =>{
              // Display success message and go back
              this.toastService.presentToast('Success', 'Profile saved', 'top', 'success', 2000);
              this.navController.back();
            },error => {
              this.toastService.presentToast('Error', 'There is an error in our servers!', 'top', 'danger', 2000);
            }
          );
        },error => {
          this.toastService.presentToast('Error', 'There is an error in our servers!', 'top', 'danger', 2000);
        }
      )
    } else {

      // Display error message
      this.toastService.presentToast('Error', 'Please fill in all required fields', 'top', 'danger', 2000);
    }

  }


  addNewLink() {
    if (this.newLink.trim() !== '') {
      this.currentProfile.liens.push(this.newLink.trim());
      this.newLink = "";
    }
  }


  deleteLink(link:string) {
    const index = this.currentProfile.liens.indexOf(link);
    if (index !== -1) {
      this.currentProfile.liens.splice(index, 1);
    }
  }

  addNewSkill() {
    if (this.newSkill.trim() !== '') {
      const newSkilla = new Skill(this.newSkill.trim());
      this.currentLancer.skills.push(newSkilla);
      this.newSkill = "";
    }
  }


  deleteSkill(skill:Skill) {
    const index = this.currentLancer.skills.indexOf(skill)
    if (index !== -1) {
      this.currentLancer.skills.splice(index, 1);
    }
  }
}
