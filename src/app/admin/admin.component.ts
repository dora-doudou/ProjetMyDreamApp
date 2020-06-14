import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Admin } from '../class/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  clients : any;
  admin = new Admin;

  constructor(private adm : ClientService) { }

  ngOnInit() {
    this.getcl();
  }

  
getcl(){
  return this.adm.client()
  .subscribe(
    res=>
    {
      this.clients = res;
      console.log(res);
    },
    err => {
      console.log ("erreur");
    }
  )
}
}
