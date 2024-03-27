import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Project} from "../../model/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public project_read_all_(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/project`);
  }

  public get_project_by_id_(): Observable<Project> {
    // Adjust the method parameters according to your endpoint requirements
    return this.http.get<Project>(`${this.apiUrl}/project/id`);
  }

  public get_project_by_email_(email: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/project/email?email=${email}`);
  }

  public project_write_(project: Project): Observable<Project> {
    const body: Object = {
      "Document": project
    };
    return this.http.post<Project>(`${this.apiUrl}/project`, body);
  }

  public project_update_(filter:number , project: Project): Observable<Project> {
    const body: Object = {
      "Filter": {"idProject":filter},
      "DataToBeUpdated": project
    };
    return this.http.put<Project>(`${this.apiUrl}/project`, body);
  }

  public project_delete_(idProject:number): Observable<void> {
    const body = { Filter: { idProject } };
    return this.http.delete<void>(`${this.apiUrl}/project`, { body });
  }
}
