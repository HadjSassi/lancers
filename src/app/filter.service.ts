import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  lancers: any;
  private historyKey = 'searchHistory';
  constructor(
    ) { }
 
 
    filterByScore(services: any[], minScore: number): any[] {
    return services.filter(service => service.score >= minScore);
  
  }  filterByPrice(services: any[], maxPrice: number): any[] {
    return services.filter(service => service.price <= maxPrice);
  }

 

  filterByDuration(services: any[], maxDuration: number): any[] {
   return services.filter(service => service.duration <= maxDuration);  }
  content_loaded: boolean = false;
   scoreFilter: any = "none";
  searchQuery: any = "";
 
  
   filterServices() {
  let filteredlancers = [...this.lancers]; // Make a copy of the original array
  if (this.scoreFilter === 'highestScore') {
    filteredlancers = filteredlancers.sort((a, b) => b.score - a.score);
  } else if (this.scoreFilter === 'lowestScore') {
    filteredlancers = filteredlancers.sort((a, b) => a.score - b.score);
  }
  if (this.searchQuery) {
    const query = this.searchQuery.toLowerCase();
   filteredlancers = filteredlancers.filter(service =>
     service.name.toLowerCase().includes(query)
   );
  }
 
   }
  

  getHistory(): string[] {
    const history = localStorage.getItem(this.historyKey);
    return history ? JSON.parse(history) : [];
  }

  addToHistory(term: string): void {
    let history = this.getHistory();
    if (!history.includes(term)) {
      history.push(term);
      localStorage.setItem(this.historyKey, JSON.stringify(history));
    }
  }

  clearHistory(): void {
    localStorage.removeItem(this.historyKey);
  }
//   consultlancer(lancer: lancers) {
//     this.router.navigate([`services/consult-service/${service.idService}`],);
//   }
//   async initialiseService(event?: any) {
//     const loading = await this.loadingCtrl.create({
//       message: 'Loading...',
//       spinner: 'bubbles',
//     });
//     await loading.present();
//     this.service.services_all_(this.currentYear, this.currentMonth).subscribe(
//       (result: any) => {
//         loading.dismiss();
//         this.services.push(...result);
//         if (event) {
//           event.target.complete();
//           event.target.disabled = this.currentYear == 2020;
//         }
//       }
//     );
//   }
//   async loadMore(event: any) {
//     if(this.currentMonth==1)
//       this.currentYear--;
//     else
//       this.currentMonth--;
//     await this.initialiseService(event);
//   }

  

 
//   }}
// function initialiseService(arg0: any) {
//   throw new Error('Function not implemented.');
// }

// function consultlancer(lancer: any, lancers: any) {
//   throw new Error('Function not implemented.');
// }
    }
