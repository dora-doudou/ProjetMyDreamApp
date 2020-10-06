import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../service/hotels.service';
import { VilleService } from '../service/ville.service';
import { Rechdispohotel } from '../class/rechdispohotel';
import { RechdispohotelService } from '../service/rechdispohotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {


  public dateFormat: String = "yyyy-MM-dd";
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public day: number = new Date().getDay();
  public start: Date = new Date ("2019-09-17"); 
  public end: Date = new Date ("2019-09-18");
recherche: any;
  url:string;
  hotel: any;

  constructor(private hotelservice : HotelsService , private vil : VilleService
    , private disposerv : RechdispohotelService) 
  { }

  ngOnInit() {
    this.gethot();
    this.getvil();
  }

  hotels:any;
  villes : any;
  rechdispoHotel= new Rechdispohotel;

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
  



getdestination(value:string){
  console.log(value);
 this.rechdispoHotel.destination_city=value;
                        }

 getdate(value:Date){
  this.rechdispoHotel.check_in=value["0"];
 this.rechdispoHotel.check_out=value["1"];
  console.log(this.rechdispoHotel);
 }

rechercher(){

  console.log(this.rechdispoHotel)
return this.disposerv.recherdispohotel(this.rechdispoHotel)
  .subscribe(
    res => {
      this.recherche = res;
      console.log(res);
    },
    err => {
      console.log ("erreur");
    }
  )
}




}

