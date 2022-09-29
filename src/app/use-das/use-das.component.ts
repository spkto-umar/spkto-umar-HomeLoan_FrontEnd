import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { AppForModel } from '../app-for/appfor.model';
import { AppforService } from '../services/appfor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-use-das',
  templateUrl: './use-das.component.html',
  styleUrls: ['./use-das.component.css']
})

export class UseDasComponent implements OnInit {

  userId : number = 0;
  firstName : string = "";
  lastName : string = "";
  middleName : string = "";
  email : string = "";
  password : string = "";
  phone : number = 0;
  dob : string = "";
  gender : string = "";
  nationality : string = "";
  aadharNo : number = 0;
  panNo : string = "";


  formValue !: FormGroup;
  UserModelObj : AppForModel = new AppForModel();

  constructor(private share: ShareService,
              private http: HttpClient,
              private formbuilder: FormBuilder,
              private api: AppforService,
              private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      userId:[],
      firstName : [''],
      lastName : [''],
      middleName : [''],
      email : [''],
      password : [''],
      phone : [''],
      dob : [''],
      gender : [''],
      nationality : [''],
      aadharNo : [''],
      panNo : ['']
    })

    this.getUser();
    
  }

  getUser(){
    let user_details : string[] = this.share.getUser();
    this.http.get<any>("http://localhost:8091/HomeLoan/customers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        if(a.email === user_details[0] && a.password === user_details[1]){
          this.userId=a.userId;
          this.firstName = a.firstName;
          this.lastName = a.lastName;
          this.middleName = a.middleName;
          this.email = a.email;
          this.password = a.password;
          this.phone = a.phone;
          this.dob = a.dob;
          this.gender = a.gender;
          this.nationality = a.nationality;
          this.aadharNo = a.aadharNo;
          this.panNo = a.panNo;
        }  
      });
      if(1){}
      else{alert("user not found");}
    },err =>{
      alert("Something went wrong!!");
    })
  }

  onEdit(){
    this.formValue.controls['firstName'].setValue(this.firstName);
    this.formValue.controls['lastName'].setValue(this.lastName);
    this.formValue.controls['middleName'].setValue(this.middleName);
    this.formValue.controls['email'].setValue(this.email);
    this.formValue.controls['password'].setValue(this.password);
    this.formValue.controls['phone'].setValue(this.phone);
    this.formValue.controls['dob'].setValue(this.dob);
    this.formValue.controls['gender'].setValue(this.gender);
    this.formValue.controls['nationality'].setValue(this.nationality);
    this.formValue.controls['aadharNo'].setValue(this.aadharNo);
    this.formValue.controls['panNo'].setValue(this.panNo);
  }


  updateUserDetails(){
    this.UserModelObj.userId=this.userId;
    this.UserModelObj.firstName = this.formValue.value.firstName;
    this.UserModelObj.lastName = this.formValue.value.lastName;
    this.UserModelObj.middleName = this.formValue.value.middleName;
    this.UserModelObj.email = this.formValue.value.email;
    this.UserModelObj.password = this.formValue.value.password;
    this.UserModelObj.phone = this.formValue.value.phone;
    this.UserModelObj.dob = this.formValue.value.dob;
    this.UserModelObj.gender = this.formValue.value.gender;
    this.UserModelObj.nationality = this.formValue.value.nationality;
    this.UserModelObj.aadharNo = this.formValue.value.aadharNo;
    this.UserModelObj.panNo = this.formValue.value.panNo;
    
    console.log(this.UserModelObj);

    setTimeout(()=>{

    this.api.updateUser(this.UserModelObj, this.userId)
    .subscribe(res => {
      console.log(res);
      alert("user updated successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getUser();
      // this.router.navigate(['use-das']);
    },
    err => {
      alert("Something went wrong.");
    })
  }, 2000);

  }

}
