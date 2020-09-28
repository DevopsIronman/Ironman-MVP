import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  public API_URL = 'http://192.168.43.120:8080';
  constructor(private http: HttpClient) { }

  private extractData1(res: any) {
    let body = res;
    return body || {};
  }

  getLead(): Observable<any> {
    return this.http.get<any>(this.API_URL+'/api/createLead/').pipe(
      map(this.extractData1));
  }
  getCustomer(): Observable<any> {
    return this.http.get<any>(this.API_URL+'/api/createLead/customer').pipe(
      map(this.extractData1));
  }

  addLead(datas): Observable<any> {
    return this.http.post<any>(this.API_URL+'/api/createLead/', datas).pipe(
      map(this.extractData1));
  }

  convertLead( datas): Observable<any> {
    return this.http.post<any>(this.API_URL+'/api/createLead/convertLead', datas).pipe(
      map(this.extractData1));
  }
  customerProfile( datas): Observable<any> {
    return this.http.post<any>(this.API_URL+'/api/createLead/customerProfile', datas).pipe(
      map(this.extractData1));
  }
}
