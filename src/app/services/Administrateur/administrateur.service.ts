import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Administrateur} from "../../model/Administrateur";

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public admin_read_all_(): Observable<Administrateur[]> {
    return this.http.get<Administrateur[]>(`${this.apiServeurUrl}/admin`);
  }

  public admin_get_by_email_(email: string): Observable<Administrateur> {
    return this.http.get<Administrateur>(`${this.apiServeurUrl}/admin/email?email=${email}`);
  }

  public admin_write_(Administrateur: Administrateur): Observable<any> {
    const body: Object = {
        "Document": Administrateur
      };
    return this.http.post<Administrateur>(`${this.apiServeurUrl}/admin`, body);
  }

  public admin_update_(filter: string, Administrateur: Administrateur): Observable<Administrateur> {
    const body: Object = {
      "Filter": {"email":filter},
      "DataToBeUpdated": Administrateur
    };
    return this.http.put<Administrateur>(`${this.apiServeurUrl}/admin`, body);
  }

  public admin_delete_(email: string): Observable<void> {
    const body = { Filter: { email } };
    return this.http.delete<void>(`${this.apiServeurUrl}/admin`, { body });
  }


  /* this is how we send post
  {
  "Document": {
    "email":"test2@test2.test2",
    "privieges":[
        "validerContrat"
        ]
  }
}
*/
  /* this is how we send put
  {
  "Filter": {
    "email": "test2@test2.test2"
  },
  "DataToBeUpdated": {
    "privieges":[
        "modiferService"
        ]
  }
}
   */

  /* this is how we send delete
  {
  "Filter": {
    "email": "test2@test2.test2"
  }
}

   */



}
