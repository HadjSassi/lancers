import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Lancer} from "../../model/Lancer";

@Injectable({
  providedIn: 'root'
})
export class LancerService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public lancer_read_all_(): Observable<Lancer[]> {
    return this.http.get<Lancer[]>(`${this.apiUrl}/lancer`);
  }

  public get_lancer_by_email_(email: string): Observable<Lancer> {
    return this.http.get<Lancer>(`${this.apiUrl}/lancer/email?email=${email}`);
  }

  public lancer_write_(lancer: Lancer): Observable<any> {
    const body: Object = {
      "Document": lancer
    };
    return this.http.post<Lancer>(`${this.apiUrl}/lancer`, body);
  }

  public lancer_update_(filter:string ,lancer: Lancer): Observable<Lancer> {
    const body: Object = {
      "Filter": {"email":filter},
      "DataToBeUpdated": lancer
    };
    return this.http.put<Lancer>(`${this.apiUrl}/lancer`, body);
  }

  public lancer_delete_(email: string): Observable<void> {
    const body = { Filter: { email } };
    return this.http.delete<void>(`${this.apiUrl}/lancer`, { body });
  }
}
