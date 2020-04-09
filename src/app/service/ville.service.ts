import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http : HttpClient) { }
  url = "https://www.freedomtravel.tn/json/ville.php"
  
  getville(){
    return this.http.get(this.url);
  }
}
