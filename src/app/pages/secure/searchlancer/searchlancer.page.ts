import {Component, OnInit} from '@angular/core';
import {FilterService} from '../../../filter.service';
import {Lancer} from 'src/app/model/Lancer';
import {Profile} from 'src/app/model/Profile';
import {LancerService} from 'src/app/services/Lancer/lancer.service';
import {ProfileService} from 'src/app/services/Profile/profile.service';
import {SearchbarChangeEventDetail} from '@ionic/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-searchlancer',
  templateUrl: './searchlancer.page.html',
  styleUrls: ['./searchlancer.page.scss'],

})
export class SearchlancerPage implements OnInit {
  services: any[] = [];
  filteredServices: any[] = [];
  searchQuery: any = "";
  minScore: number = 0; // Définissez le score minimum par défaut
  searchTerm: string = '';
  listaDeLancer: { lancer: Lancer, profile: Profile }[] = []//each elements has two objects the lancer and the profile

  // searchHistory: string[] | undefined;

  constructor(private lancerService: LancerService, private profileService: ProfileService
    , private filterservice: FilterService, private router: Router) {
    // this.searchHistory = this.filterservice.getHistory();
  }

  // search(event: CustomEvent) {
  //   this.searchTerm = event.detail.value;
  //   this.filterservice.addToHistory(this.searchTerm);
  //   // Perform search with this.searchTerm
  // }

  // clearHistory() {
  //   this.filterservice.clearHistory();
  //   this.searchHistory = [];
  // }

  ngOnInit() {
    this.initialiseUsers();
  }

  initialiseUsers() {
    this.lancerService.lancer_read_all_().subscribe(
      (result: Lancer[]) => {
        result.forEach(res => {
          this.profileService.profile_get_by_email_(res.email).subscribe(
            (ree: Profile) => {
              let useer: { lancer: Lancer, profile: Profile } = {lancer: res, profile: ree};
              this.listaDeLancer.push(useer);
            }
          );
        });
      }
    );
  }

  filterUsers() {
    let filteredlancers = [...this.listaDeLancer]; // Make a copy of the original array
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredlancers = filteredlancers.filter(service =>
        service.profile.nom.toLowerCase().includes(query)
      );
    }
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredlancers = filteredlancers.filter(service =>
        service.profile.nom.toLowerCase().includes(query) ||
        service.profile.prenom.toLowerCase().includes(query) ||
        service.lancer.skills.includes(query)
      )

    }

    return filteredlancers;
  }

  consultLancer(lancer: Lancer){
    this.router.navigate([`searchlancer/consult-lancer/${lancer.email}`],);
  }

  //  onScoreChange() {
  //    this.filteredlancers= this.filterService.filterByScore(this.services, this.minScore);
  //  }



}




