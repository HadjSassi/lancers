import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Restriction} from "../../model/Restriction";

@Injectable({
  providedIn: 'root'
})
export class RestrictionService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public restriction_read_all_(): Observable<Restriction[]> {
    return this.http.get<Restriction[]>(`${this.apiUrl}/restriction`);
  }

  public get_restriction_by_id_(id:number): Observable<Restriction> {
    // Adjust the method parameters according to your endpoint requirements
    return this.http.get<Restriction>(`${this.apiUrl}/restriction/id?id=${id}`);
  }

  public get_restriction_by_email_(email:string): Observable<Restriction[]> {
    // Adjust the method parameters according to your endpoint requirements
    return this.http.get<Restriction[]>(`${this.apiUrl}/restriction/email?email=${email}`);
  }

  public get_restriction_by_email_and_date_(email: string, date: string): Observable<Restriction[]> {
    return this.http.get<Restriction[]>(`${this.apiUrl}/restriction/email/date?email=${email}&date=${date}`);
  }

  public restriction_write_(restriction: Restriction): Observable<any> {
    const body: Object = {
      "Document": restriction
    };
    return this.http.post<Restriction>(`${this.apiUrl}/restriction`, body);
  }

  public restriction_update_(filter:number ,restriction: Restriction): Observable<Restriction> {
    const body: Object = {
      "Filter": {"idRestriction":filter},
      "DataToBeUpdated": restriction
    };
    return this.http.put<Restriction>(`${this.apiUrl}/restriction`, body);
  }

  public restriction_delete_(idRestriction:number): Observable<void> {
    const body = { Filter: { idRestriction } };
    return this.http.delete<void>(`${this.apiUrl}/restriction`, { body });
  }
}
