import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Services} from "../../model/Services";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public services_read_all_(): Observable<Services[]> {
    return this.http.get<Services[]>(`${this.apiUrl}/services`);
  }

  public get_services_by_id_(id:number): Observable<Services> {
    // Adjust the method parameters according to your endpoint requirements
    return this.http.get<Services>(`${this.apiUrl}/services/id?id=${id}`);
  }

  public get_services_by_email_(email: string): Observable<Services[]> {
    return this.http.get<Services[]>(`${this.apiUrl}/services/email?email=${email}`);
  }

  public get_services_by_email_approved_(email: string): Observable<Services[]> {
    // Adjust the method parameters according to your endpoint requirements
    return this.http.get<Services[]>(`${this.apiUrl}/services/email/approved?email=${email}`);
  }

  public get_services_by_email_not_approved_(email: string): Observable<Services[]> {
    // Adjust the method parameters according to your endpoint requirements
    return this.http.get<Services[]>(`${this.apiUrl}/services/email/notapproved?email=${email}`);
  }

  public services_write_(service: Services): Observable<any> {
    const body: Object = {
      "Document": service
    };
    return this.http.post<Services>(`${this.apiUrl}/services`, body);
  }

  public services_update_(filter:number,service: Services): Observable<Services> {
    const body: Object = {
      "Filter": {"idService":filter},
      "DataToBeUpdated": service
    };
    return this.http.put<Services>(`${this.apiUrl}/services`, body);
  }

  public services_delete_(idService:number): Observable<void> {
    const body = { Filter: { idService } };
    return this.http.delete<void>(`${this.apiUrl}/services`, { body });
  }
}
