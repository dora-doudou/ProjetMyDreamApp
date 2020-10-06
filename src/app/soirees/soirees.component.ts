import { Component, OnInit } from '@angular/core';
import{  SoireesService } from '../service/soirees.service';
import { Soirees } from '../class/soirees';

@Component({
  selector: 'app-soirees',
  templateUrl: './soirees.component.html',
  styleUrls: ['./soirees.component.css']
})
export class SoireesComponent implements OnInit {

  constructor( private soireesserv : SoireesService) { }

  Soiree:Soirees;
 // Soiree1:any;
  //Soiree2:any;

  ngOnInit() { 
    //this.hetlsoirees();  
  }
/*
  hetlsoirees(){
    this.soireesserv.getSoirees()
    .subscribe(
      res => {
        console.log(res);
       this.Soiree=res;
  
      },
      err => {
        console.log ("erreur");
      }
    )
   
  }*/

}
