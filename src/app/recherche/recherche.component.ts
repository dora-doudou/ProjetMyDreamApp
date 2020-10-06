import { Component, OnInit } from '@angular/core';
import { VilleService } from '../service/ville.service';
import { Rechdispohotel } from '../class/rechdispohotel';
import { RechdispohotelService } from '../service/rechdispohotel.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

 
  public dateFormat: String = "yyyy-MM-dd";
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public day: number = new Date().getDay();

  public start: Date = new Date ("2019-09-17"); 
  public end: Date = new Date ("2019-09-18");
recherche: any;


  constructor(private villeser : VilleService, private disposerv : RechdispohotelService)
   { }

   villes : any;
   rechdispoHotel= new Rechdispohotel;

  ngOnInit() {
    this.hetelbolden();  
  }

  hetelbolden(){
    this.villeser.getville()
    .subscribe(
      res => {
        this.villes = res;
        console.log(res);
      },
      err => {
        console.log ("erreur");
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
