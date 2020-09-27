import { Injectable, HostDecorator } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: LoginService) { }
  
  intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    req = req.clone({setHeaders: {Authorization: `Bearer ${this.auth.getToken()}` }});// clone=copie exacte
    return next.handle(req);
  }

}
