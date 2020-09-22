import {Injectable}               from '@angular/core';
import {HttpClient, HttpHeaders}           from '@angular/common/http';
// import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmailService {
  constructor (private _http: HttpClient) {}
 
  serverURL = environment.serverURL;
 
  postEmail(newMail: any): Promise<any>{
    return this._http.post(this.serverURL +"/sendmail", newMail).toPromise();
  }
}