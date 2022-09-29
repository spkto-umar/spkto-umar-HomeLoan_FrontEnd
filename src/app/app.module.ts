import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import rjxs;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EliCalComponent } from './eli-cal/eli-cal.component';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import { AppForComponent } from './app-for/app-for.component';
import { AboUsComponent } from './abo-us/abo-us.component';
import { UseLogComponent } from './use-log/use-log.component';
import { AdmLogComponent } from './adm-log/adm-log.component';
import { HomeComponent } from './home/home.component';
import { AdmDasComponent } from './adm-das/adm-das.component';
import { UseDasComponent } from './use-das/use-das.component';
import { LoaDetComponent } from './loa-det/loa-det.component';
import { IncDetComponent } from './inc-det/inc-det.component';
import { ProDetComponent } from './pro-det/pro-det.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { UseNavComponent } from './use-nav/use-nav.component';
import { AdmNavComponent } from './adm-nav/adm-nav.component';
import { LoaTraComponent } from './loa-tra/loa-tra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EliCalComponent,
    EmiCalComponent,
    AppForComponent,
    AboUsComponent,
    UseLogComponent,
    AdmLogComponent,
    HomeComponent,
    AdmDasComponent,
    UseDasComponent,
    LoaDetComponent,
    IncDetComponent,
    ProDetComponent,
    ErrorComponent,
    UseNavComponent,
    AdmNavComponent,
    LoaTraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
