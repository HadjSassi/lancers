import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commentaire } from '../../model/Commentaire'; // Adjust the import path based on your project structure

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public comment_read_all_(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/comment`);
  }

  public get_comments_by_email_(email: string): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/comment/email?email=${email}`);
  }

  public get_comments_by_email_and_date_(email: string, date: string): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/comment/email/date?email=${email}&date=${date}`);
  }

  public get_comments_by_service_id_(serviceId: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/comment/service?service_id=${serviceId}`);
  }

  public get_comments_by_service_id_and_date_(serviceId: string, date: string): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/comment/service/date?service_id=${serviceId}&date=${date}`);
  }

  public get_comments_by_service_id_and_email_(serviceId: string, email: string): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/comment/service/email?service_id=${serviceId}&email=${email}`);
  }

  public get_comments_by_service_id_and_email_and_date_(serviceId: string, email: string, date: string): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/comment/service/email/date?service_id=${serviceId}&email=${email}&date=${date}`);
  }

  public comment_write_(commentaire: Commentaire): Observable<any> {
    const body: Object = {
      "Document": commentaire
    };
    return this.http.post<Commentaire>(`${this.apiUrl}/comment`, body);
  }

  public comment_update_(idService:number,email:string,dateComment:Date,commentaire: Commentaire): Observable<Commentaire> {
    const body: Object = {
      "Filter": {
        "email":email,
        "idService":idService,
        "dateComment":dateComment
      },
      "DataToBeUpdated": commentaire
    };
    return this.http.put<Commentaire>(`${this.apiUrl}/comment`, body);
  }

  public comment_delete_(idService:number,email:string,dateComment:Date): Observable<void> {
    const body = {Filter: {email,idService,dateComment }};
    return this.http.delete<void>(`${this.apiUrl}/comment`, { body });
  }
}
