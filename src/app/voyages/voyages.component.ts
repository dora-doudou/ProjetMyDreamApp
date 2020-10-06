import { Component, OnInit } from '@angular/core';
import{  VoyagesService } from '../service/voyages.service';
import { Voyages } from '../class/voyages';


@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {

  constructor( private voyageserv : VoyagesService) { }

  voyages:Voyages;
  //voyage1:any;
  //voyage2:any;

  ngOnInit() { this.hetlvoyages(); }


  hetlvoyages(){
    this.voyageserv.getVoyages()
    .subscribe(
      res => {
        console.log(res);
       this.voyages=res;
  
      },
      err => {
        console.log ("erreur");
      }
    )
   
  }


}
