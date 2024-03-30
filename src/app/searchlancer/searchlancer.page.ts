import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-searchlancer',
  templateUrl: './searchlancer.page.html',
  styleUrls: ['./searchlancer.page.scss'],
})
export class SearchlancerPage implements OnInit {
  services: any[] = [];
  filteredServices: any[] = [];
  minScore: number = 0; // Définissez le score minimum par défaut
  searchTerm: string = '';

  constructor(private filterService: FilterService) {
     }

  ngOnInit() {
    this.services ;
    this.filteredServices = this.services;
  }
  onScoreChange() {
    this.filteredServices = this.filterService.filterByScore(this.services, this.minScore);
  }
}
