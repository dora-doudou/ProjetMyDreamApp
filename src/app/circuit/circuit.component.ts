import { Component, OnInit } from '@angular/core';
import{  CircuitService } from '../service/circuit.service';
import { Circuits } from '../class/circuits';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {

  constructor( private circuitserv : CircuitService) { }


  Circuit:Circuits;
  //circuit1:any;
  //circuit2:any;

  ngOnInit() { 
    //this.hetlcircuits(); 
    }
/*
  hetlcircuits(){
    this.circuitserv.getCircuits()
    .subscribe(
      res => {
        console.log(res);
       this.Circuit=res;
  
      },
      err => {
        console.log ("erreur");
      }
    )
   
  }*/
}
