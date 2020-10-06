import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { SoireesComponent } from './soirees/soirees.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CircuitComponent } from './circuit/circuit.component';
import { GuardGuard } from './guard.guard';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [
  {path : '',component:HomeComponent},
  {path : 'home',component:HomeComponent},
  {path : 'hotels',component:HotelsComponent},
  {path : 'voyages',component:VoyagesComponent},
  {path : 'soirees',component:SoireesComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'hotels/:id',component:HotelDetailsComponent},
  {path : 'circuit',component:CircuitComponent},
  {path : 'admin' , component : AdminComponent, canActivate : [GuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
