import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboUsComponent } from './abo-us/abo-us.component';
import { AdmDasComponent } from './adm-das/adm-das.component';
import { AdmLogComponent } from './adm-log/adm-log.component';
import { AppForComponent } from './app-for/app-for.component';
import { EliCalComponent } from './eli-cal/eli-cal.component';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { IncDetComponent } from './inc-det/inc-det.component';
import { LoaDetComponent } from './loa-det/loa-det.component';
import { LoaTraComponent } from './loa-tra/loa-tra.component';
import { ProDetComponent } from './pro-det/pro-det.component';
import { UseDasComponent } from './use-das/use-das.component';
import { UseLogComponent } from './use-log/use-log.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'eli-cal', component:EliCalComponent},
  {path:'emi-cal', component:EmiCalComponent},
  {path:'app-for', component:AppForComponent},
  {path:'abo-us', component:AboUsComponent},
  {path:'adm-log', component:AdmLogComponent},
  {path:'use-log', component:UseLogComponent},
  {path:'adm-das', component:AdmDasComponent},
  {path:'use-das', component:UseDasComponent},
  {path:'pro-det', component:ProDetComponent},
  {path:'inc-det', component:IncDetComponent},
  {path:'loa-det', component:LoaDetComponent},
  {path:'loa-tra', component:LoaTraComponent},
  // {path:'error', component:ErrorComponent},
  {path:"", redirectTo:"/home", pathMatch: "full"},
  // {path:"**", redirectTo:"/error", pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
