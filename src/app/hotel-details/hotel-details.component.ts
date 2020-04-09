import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carousel } from '../class/carousel';
import { CarouselService } from '../service/carousel.service';
import { HotelsService } from '../service/hotels.service';
import { VilleService } from '../service/ville.service';
import { Hotels } from '../class/hotels';

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
