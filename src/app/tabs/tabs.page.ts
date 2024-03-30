import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private actionSheetController: ActionSheetController ,
    private router: Router
  ) {}

  // Select action
  async selectAction() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Choose an action',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'search service',
          icon: 'search',
          handler: () => {
            // Put in logic ...
            this.router.navigate(['/searchservice'], { queryParams: { search: 'service' } });

          }
        },
        {
          text: 'search lancer',
          icon: 'search',
          handler: () => {
            // Put in logic ...
            this.router.navigate(['/searchlancer'], { queryParams: { search: 'lancer' } });

          }
        },
       ]
    });
    await actionSheet.present();
  }
}
