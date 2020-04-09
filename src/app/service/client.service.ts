import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../class/client';
import { Observable } from 'rxjs';
import { LoginService } from '../service/user.service';


const clientUrl = "http://myfreedobt.cluster011.ovh.net/api/client_indivs.json";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private clients : HttpClient, private logs : LoginService  ) { }
   hhtpOptions={
    headers : new HttpHeaders ({'Content-type' : 'application/json',/*'Authorization': `Bearer ${this.logs.getToken()}` */ })
  }
client() : Observable<Client>{
  
  return this.clients.get<Client>(clientUrl, this.hhtpOptions)
}

}
