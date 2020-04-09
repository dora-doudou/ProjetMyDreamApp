import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private log : LoginService) { }


  ngOnInit() {
  }
logouts(){
  return this.log.logout();
}
logins(){
  console.log(this.log.loggedIn())
  return this.log.loggedIn()
}
}
