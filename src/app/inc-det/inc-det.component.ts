import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { IncDetModel } from './inc-det.model';
import { UserModel } from './inc-det.model';
import { HttpClient } from '@angular/common/http';
import { AppforService } from '../services/appfor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inc-det',
  templateUrl: './inc-det.component.html',
  styleUrls: ['./inc-det.component.css']
})
export class IncDetComponent implements OnInit {

  formValue !: FormGroup;
  IncDetModelObj : IncDetModel = new IncDetModel();
  UseDetModelObj : UserModel = new UserModel();
  userId: number=0;
  constructor(private formbuilder: FormBuilder,
              private share : ShareService,
              private http: HttpClient,
              private api: AppforService,
              private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      propertyName : [''],
      propertyLocation : [''],
      amount : [''],
      retirementAge : [''],
      monthlySalary : [''],
      organization : [''],
      user : ['']
    })
  }

  // functionCall(IncDetModelObj : any){
    

    
  // }

  postIncomeDetails(){
    // console.log(this.IncDetModelObj);
    
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
    
    this.IncDetModelObj.customer = this.UseDetModelObj;
    this.IncDetModelObj.propertyName = this.formValue.value.propertyName;
    this.IncDetModelObj.propertyLocation = this.formValue.value.propertyLocation;
    this.IncDetModelObj.amount = this.formValue.value.amount;
    this.IncDetModelObj.retirementAge = this.formValue.value.retirementAge;
    this.IncDetModelObj.monthlySalary = this.formValue.value.monthlySalary;
    this.IncDetModelObj.organization = this.formValue.value.organization;
    
    setTimeout(()=>{
      this.api.postIncDet(this.IncDetModelObj,this.userId)
      .subscribe(res => {
        console.log(res);
        alert("income details added successfully");
        this.formValue.reset();
        this.router.navigate(['loa-det']);
      },
      err => {
        alert("Something went terribly wrong.");
      })
    }, 2000);
  }


}
