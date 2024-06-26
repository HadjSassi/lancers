import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Contracts} from "../../model/Contracts";
import {Services} from "../../model/Services";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public contract_read_all_(): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract`);
  }

  public get_service_by_contract_id(contractId:string):Observable<Services>{
    return this.http.get<Services>(`${this.apiUrl}/contract/service/id?id=${contractId}`);
  }

  public get_contract_by_id_(contractId: number): Observable<Contracts> {
    return this.http.get<Contracts>(`${this.apiUrl}/contract/id?id=${contractId}`);
  }

  public get_contract_by_requestee_email_(email: string,year:number,month:number): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/requestee?email=${email}&year=${year}&month=${month}`);
  }

  public get_contract_by_email_(email: string,year:number,month:number): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/email?email=${email}&year=${year}&month=${month}`);
  }

  public get_contract_by_email_and_date_(email: string, date: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/email/date?email=${email}&date=${date}`);
  }

  public get_contract_by_email_and_etat_(email: string, state: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/email/etat?email=${email}&etat=${state}`);
  }

  public get_contract_by_service_(serviceId: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/service?service=${serviceId}`);
  }

  public get_contract_by_service_and_date_(serviceId: number, date: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/service/date?service=${serviceId}&date=${date}`);
  }

  public get_contract_by_service_and_etat_(serviceId: number, state: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/service/etat?service=${serviceId}&etat=${state}`);
  }

  public get_contract_by_service_and_email_(serviceId: number, email: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/service/email?service=${serviceId}&email=${email}`);
  }

  public get_contract_by_service_and_email_and_date_(serviceId: number, email: string, date: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/service/email/date?service=${serviceId}&email=${email}&date=${date}`);
  }

  public get_contract_by_service_and_email_and_etat_(serviceId: number, email: string, state: string): Observable<Contracts[]> {
    return this.http.get<Contracts[]>(`${this.apiUrl}/contract/service/email/etat?service=${serviceId}&email=${email}&etat=${state}`);
  }

  public contract_write_(contract: Contracts): Observable<any> {
    const { service, ...contractWithoutService } = contract;
    const body: Object = {
      "Document": contractWithoutService
    };
    return this.http.post<Contracts>(`${this.apiUrl}/contract`, body);
  }

  public contract_update_(id:number, contract: Contracts): Observable<any> {
    const { service, ...contractWithoutService } = contract;
    const body: Object = {
      "Filter": {"id":id},
      "DataToBeUpdated": contractWithoutService
    };
    console.log(body);
    return this.http.put<any>(`${this.apiUrl}/contract`,  body);
  }

  public contract_delete_(id: number): Observable<void> {
    const body = { Filter: { id } };
    return this.http.delete<void>(`${this.apiUrl}/contract`, { body });
  }
}
