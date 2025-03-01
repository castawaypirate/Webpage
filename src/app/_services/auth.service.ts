import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { IAuth } from '../_interfaces/auth';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<IAuth>{
    return this.http.post<any>(environment.apiUrl + '/users/login',{username,password}).pipe(
      catchError((e: any) => Observable.throw(this.errorHandler(e))));
  }

  errorHandler(error: any): void {
    console.log(error)
  }

  getToken(){
    return localStorage.getItem('userToken');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuth() {
    return localStorage.getItem('userToken') ? true : false;
  }
}
