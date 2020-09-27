import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Addnewsletter } from '../class/addnewsletter';


const httpOptions={ headers : new HttpHeaders({'Content-Type': 'application/json'})};
const apiUrl="https://www.freedomtravel.tn/ng/addnewLEtterForm.php";

@Injectable({  providedIn: 'root'})

export class NewsletterService {

  constructor(private http: HttpClient, private handler : HttpBackend)
   { this.http=new HttpClient(handler); }

   add( addnewss: Addnewsletter): Observable<Addnewsletter>{
    return this.http.post<Addnewsletter>(apiUrl,addnewss,httpOptions) ;
  }
  
}
