import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent  implements OnInit {
  @Input() dateFilter: string | undefined ;
  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
  ngOnInit() {}

}





 


