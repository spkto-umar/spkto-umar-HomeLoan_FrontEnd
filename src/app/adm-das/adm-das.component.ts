import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppForModel } from '../app-for/appfor.model';
import { LoaDetModel } from '../loa-det/loa-det.model';
import { AppforService } from '../services/appfor.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-adm-das',
  templateUrl: './adm-das.component.html',
  styleUrls: ['./adm-das.component.css']
})
export class AdmDasComponent implements OnInit {
  formValue !: FormGroup;
  loadetModel :LoaDetModel=new LoaDetModel;
  //users = [];
  public users : any;
  constructor(
    private formbuilder: FormBuilder,
    private share : ShareService,
    private router : Router,
    private http : HttpClient,
    private app : AppforService,
              ) { }
 
              ngOnInit(): void {
                 this.formValue = this.formbuilder.group({
                  ApplicationId : [''],
                  LoanAmount : [''],
                  Tenure : [''],
                  InterestRate : [''],
                  Status : [''],
                }) 
                this.getLoanDetails();
              }
            
              getLoanDetails(){
                
                this.app.getLoan().subscribe(
                  res=>{this.users=res
                    console.log(this.users)
                  }
                  
                )
                
              }
              //take i as input instead of event and get application id by passing index in user array
              onClickAccept(i: any){
                console.log(i)
                const id=this.users[i].applicationId;
                console.log(this.users[i]);
                this.users[i].status="Accepted";
                this.app.updateLoan(this.users[i],id).subscribe(
                  res=>{console.log(res)}
                )
              }
              onClickReject(i: any){
                console.log(i)
                const id=this.users[i].applicationId;
                console.log(this.users[i]);
                this.users[i].status="Rejected";
                this.app.updateLoan(this.users[i],id).subscribe(
                  res=>{console.log(res)}
                )
              }
 }