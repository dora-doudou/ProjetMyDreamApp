import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../service/hotels.service';
import { VilleService } from '../service/ville.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private hotelservice : HotelsService , private vil : VilleService) { }

  ngOnInit() {
    this.gethot();
    this.getvil();
  }
  hotel : any;
  gethot(){
this.hotelservice.gethotels()
.subscribe(
  res=>
  {
    console.log(res)
    this.hotel = res ;
    console.log(this.hotel);
  }
)}

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
)
}
  

}

