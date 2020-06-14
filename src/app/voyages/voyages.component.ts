import { Component, OnInit } from '@angular/core';
import{  VoyagesService } from '../service/voyages.service';
import { Voyages } from '../class/voyages';


@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {

  constructor( private ville : VoyagesService ) { }

  ngOnInit() {
    this.ville.getVoyages()

  }

}
