import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/user.service';
import { User } from '../class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User;
  constructor( private logs : LoginService , private _router : Router ) { }

  ngOnInit() {
  }
login(){
this.logs.login(this.user).subscribe(
  res=>{
    //console.log(res)
    localStorage.setItem('token', res.token);
    localStorage.setItem('refresh_token', res.refresh_token);
   // console.log(localStorage.getItem('token'));

this._router.navigate(['/admin']);
  }
)
}
}
