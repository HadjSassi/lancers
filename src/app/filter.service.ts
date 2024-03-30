import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  filterByScore(services: any[], minScore: number): any[] {
    return services.filter(service => service.score >= minScore);
  }
  filterByPrice(services: any[], maxPrice: number): any[] {
    return services.filter(service => service.price <= maxPrice);
  }

 

  filterByDuration(services: any[], maxDuration: number): any[] {
    return services.filter(service => service.duration <= maxDuration);
  }
}
