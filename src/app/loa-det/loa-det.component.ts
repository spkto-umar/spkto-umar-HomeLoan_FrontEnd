import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { LoaDetModel } from './loa-det.model';
import { UserModel } from './loa-det.model';
import { HttpClient } from '@angular/common/http';
import { AppforService } from '../services/appfor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loa-det',
  templateUrl: './loa-det.component.html',
  styleUrls: ['./loa-det.component.css']
})
export class LoaDetComponent implements OnInit {

  formValue !: FormGroup;
  LoaDetModelObj : LoaDetModel = new LoaDetModel();
  UseDetModelObj : UserModel = new UserModel();
  userId:number=0;

  constructor(private formbuilder: FormBuilder,
    private share : ShareService,
    private http: HttpClient,
    private api: AppforService,
    private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      loanAmount : [''],
      tenure : [''],
      interest : [''],
      status : [''],
      user : ['']
    })
  }

  postLoanDetails(){
    // console.log(this.LoaDetModelObj);
    
    let user_details : string[] = this.share.getUser();
    console.log(user_details);

    this.http.get<any>("http://localhost:8091/HomeLoan/customers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        if(a.email === user_details[0] && a.password === user_details[1]){
          console.log("did we found the match");
          
          this.userId=a.userId;
          this.UseDetModelObj.firstName = a.firstName;
          this.UseDetModelObj.lastName = a.lastName;
          this.UseDetModelObj.middleName = a.middleName;
          this.UseDetModelObj.email = a.email;
          this.UseDetModelObj.password = a.password;
          this.UseDetModelObj.phone = a.phone;
          this.UseDetModelObj.dob = a.dob;
          this.UseDetModelObj.gender = a.gender;
          this.UseDetModelObj.nationality = a.nationality;
          this.UseDetModelObj.aadharNo = a.aadharNo;
          this.UseDetModelObj.panNo = a.panNo;

          
          // console.log(this.UseDetModelObj);
        }  
      });
      // if(1){}
      // else{alert("user not found");}
    },err =>{
      alert("Something went  wrong!!");
    })
    
    console.log("breaker of the line");
    
    this.LoaDetModelObj.customer = this.UseDetModelObj;
    this.LoaDetModelObj.loanAmount = this.formValue.value.loanAmount;
    this.LoaDetModelObj.tenure = this.formValue.value.tenure;
    this.LoaDetModelObj.interest = this.formValue.value.interest;
    this.LoaDetModelObj.status = "pending";

    setTimeout(()=>{
      this.api.postLoaDet(this.LoaDetModelObj,this.userId)
      .subscribe(res => {
        console.log(res);
        alert("loan details added successfully");
        this.formValue.reset();
        this.router.navigate(['pro-det']);
      },
      err => {
        alert("Something went terribly wrong.");
      })
    }, 2000);
  }



}
