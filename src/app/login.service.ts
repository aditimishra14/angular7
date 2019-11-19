import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor( private _http:HttpClient) { }

  addLoginUser(username: string, password: string): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let data = { UserName: username, Password: password };
    return this._http.post('http://matri.sangarsamaj.com/Repository/LogIn', data, {});
  }
}
