import { Component, OnInit } from '@angular/core';
import{  VoyagesService } from '../service/voyages.service';
@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {

  constructor( private ville : VoyagesService ) { }

  ngOnInit() {
    this.ville.getville()

  }

}
