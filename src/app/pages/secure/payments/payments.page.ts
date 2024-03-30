import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  messages: { text: string; type: string; sender: string }[] = [
   // { text: 'Bonjour !', type: 'received', sender: 'Alice' },
   // { text: 'Salut ! Ça va ?', type: 'sent', sender: 'John' },
  ]
  newMessage: string = '';
  selectedContact: string = 'John Doe'; 
  contacts: string[] = ['Alice', 'Bob', 'Charlie'];
  content_loaded: boolean = false;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
  ) { }

  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  // Filter
  async filter() {

    // Open filter modal
    const modal = await this.modalController.create({
      component: FilterPage,
      // swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();

    // Apply filter from modal
    let { data } = await modal.onWillDismiss();

    if (data) {

      // Reload
      this.content_loaded = false;

      // Fake timeout
      setTimeout(() => {
        this.content_loaded = true;
      }, 2000);
    }
  }
  
 

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, type: 'sent', sender: 'John' });
      this.newMessage = '';
      // Code pour envoyer le message à l'autre personne (non inclus dans cet exemple)
    }
  }

  selectContact(event: CustomEvent) {
    this.selectedContact = event.detail.value;
    this.loadMessagesForContact(this.selectedContact);
   
  }

  loadMessagesForContact(contact: string) {
    // Ici, vous devriez charger les messages du contact à partir d'une source de données
    // Par exemple, une API ou une base de données locale
    // Pour l'exemple, nous allons simplement ajouter quelques messages
    this.messages.push({ text: 'Salut !', type: 'received', sender: contact });
    this.messages.push({ text: 'Ça va ?', type: 'received', sender: contact });
  }
}