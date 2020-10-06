import { Component, OnInit } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser'
import {CarouselService} from '../service/carousel.service'
import { ActivatedRoute } from '@angular/router';
import { Carousel } from '../class/carousel';
import { HotelsService } from '../service/hotels.service';
import {  FormBuilder, Validators } from '@angular/forms';
import { TarifHotel } from '../class/tarif-hotel';
import { TarifHotelService } from '../service/tarif-hotel.service';
import {  DispoHotel } from '../class/dispo-hotel';
import { DispoHotelService } from '../service/dispo-hotel.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Hotels } from '../class/hotels';
import {Ville} from '../class/ville'
import { VilleService } from '../service/ville.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})

export class HotelDetailsComponent implements OnInit {
imgcarousels = new Carousel;
 public start: Date = new Date ("10/07/2017"); 
    public end: Date = new Date ("11/25/2017");

  constructor(private carousels : CarouselService , private route : ActivatedRoute, private hotelservice : HotelsService, private vil : VilleService ) { }

  id : any;

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
this.imgcarousels.id = this.id;
console.log(this.imgcarousels);
this.getimg();
this.gethot();
  }


  getimg(){
    console.log(this.id)
    this.carousels.getcarousel(this.imgcarousels)
    .subscribe (
      res=>
      { console.log(res)
      this.imgcarousels = res; }
      
      )
  }
  hotel : any;
  hotnom : any;

  gethot(){
this.hotelservice.gethotels()
.subscribe(
  res=>
  {
    console.log(res)
    this.hotel = res ;
    for (let hot of this.hotel){
      if(hot.id == this.id){ 
        this.hotnom = hot.nom;
        console.log(this.hotnom);  } }
} )}



ville : any;

  getvil(){
this.vil.getville()
.subscribe(
  res=>
  {
    console.log(res)
    this.ville = res ;
    console.log(this.ville);
  }
)}


}
