import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Skill} from "../../model/Skill";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public skill_read_all_(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skill`);
  }

  public skill_write_(skill: Skill): Observable<Skill> {
    const body: Object = {
      "Document": skill
    };
    return this.http.post<Skill>(`${this.apiUrl}/skill`, body);
  }

  public skill_update_(filter:string, skill: Skill): Observable<Skill> {
    const body: Object = {
      "Filter": {"skill":filter},
      "DataToBeUpdated": skill
    };
    return this.http.put<Skill>(`${this.apiUrl}/skill`, body);
  }

  public skill_delete_(skill:string): Observable<void> {
    const body = { Filter: { skill } };
    return this.http.delete<void>(`${this.apiUrl}/skill`, { body });
  }
}
