import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact }  from '../class/contact' ;
import { Observable } from 'rxjs';
const hhtpOptions={
  headers : new HttpHeaders ({'Content-type' : 'application/json' })
};

const apiUrl = "http://myfreedobt.cluster011.ovh.net/api/contacts.json";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }
  addcontac(contact : Contact): Observable<Contact>{
    return this.http.post<Contact>(apiUrl, contact, hhtpOptions)
  }
}
