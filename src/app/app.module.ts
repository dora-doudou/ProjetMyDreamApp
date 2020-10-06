import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { SoireesComponent } from './soirees/soirees.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafePipeModule } from 'safe-pipe';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CircuitComponent } from './circuit/circuit.component';
import { RechercheComponent } from './recherche/recherche.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelsComponent,
    HomeComponent,
    VoyagesComponent,
    SoireesComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    HotelDetailsComponent,
    CircuitComponent,
    RechercheComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SafePipeModule,
    FormsModule, 
    BsDatepickerModule.forRoot()

  ],
  providers: [
    {
   provide:  HTTP_INTERCEPTORS,
   useClass: TokenInterceptorService,
   multi: true
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
