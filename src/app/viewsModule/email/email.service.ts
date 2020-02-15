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
    let body = `name=${newMail.name}&email=${newMail.email}&message=${newMail.message}`;
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
 
    return this._http.post(this._contactUrl, body, { headers: headers })
                    //.map(res =>  <string> res.json())
                    .pipe(map(res => res)).toPromise();
  }
 
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json() || 'Server error');
  }
}