import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Profile} from "../../model/Profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public profile_read_all_(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiServeurUrl}/profile`);
  }

  public profile_get_by_email_(email: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiServeurUrl}/profile/email?email=${email}`);
  }

  public profile_write_(profile: Profile): Observable<Profile> {
    const body: Object = {
      "Document": profile
    };
    return this.http.post<Profile>(`${this.apiServeurUrl}/profile`, body);
  }

  public profile_update_(filter: string, profile: Profile): Observable<Profile> {
    const body: Object = {
      "Filter": {"email":filter},
      "DataToBeUpdated": profile
    };
    return this.http.put<Profile>(`${this.apiServeurUrl}/profile`, body);
  }

  public profile_delete_(email: string): Observable<void> {
    const body = { Filter: { email } };
    return this.http.delete<void>(`${this.apiServeurUrl}/profile`, { body });
  }
}
