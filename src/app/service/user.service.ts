import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { Router } from '@angular/router';

const hhtpOptions={ headers : new HttpHeaders ({'Content-type' : 'application/json' })};

const apiUrl = "http://myfreedobt.cluster011.ovh.net/api/login_check";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http : HttpClient, private router: Router) { }
  login(user :User): Observable<User>{
    return this.http.post<User>(apiUrl , user , hhtpOptions)
  }
  getToken(){
    return localStorage.getItem('token')
  }

  loggedIn()
{
return !!localStorage.getItem('token')

}
logout(){
  localStorage.removeItem('token')
  this.router.navigate(['login'])
}
}
