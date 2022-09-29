import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppforService } from '../services/appfor.service';
import { AppForModel } from './appfor.model';

@Component({
  selector: 'app-app-for',
  templateUrl: './app-for.component.html',
  styleUrls: ['./app-for.component.css']
})

export class AppForComponent implements OnInit {

  
  formValue !: FormGroup;
  UserModelObj : AppForModel = new AppForModel();

  constructor(private formbuilder: FormBuilder, private api : AppforService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
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
  }

  postUserDetails(){
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
    
    this.api.postUser(this.UserModelObj)
    .subscribe(res => {
      console.log(res);
      alert("user added successfully");
      this.formValue.reset();
    },
    err => {
      alert("Something went wrong.");
    })
    
  }



}
