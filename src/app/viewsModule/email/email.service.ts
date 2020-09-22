import {Injectable}               from '@angular/core';
import {HttpClient, HttpHeaders}           from '@angular/common/http';
// import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class EmailService {
  constructor (private _http: HttpClient) {}
 
  private _contactUrl = './assets/data/email.php';
 
  postEmail(newMail: any): Promise<any>{
    return this._http.post("http://localhost:9999/sendmail", newMail).toPromise();
  }
}