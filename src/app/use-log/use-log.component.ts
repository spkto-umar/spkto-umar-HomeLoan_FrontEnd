import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';  
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-use-log',
  templateUrl: './use-log.component.html',
  styleUrls: ['./use-log.component.css']
})
export class UseLogComponent implements OnInit {

  public loginForm !: FormGroup;
  userId!:number;
  // showAdmin : boolean = false;
  // showUser : boolean = false;
  // showLogout : boolean ;
  
  constructor(private formbuilder : FormBuilder,
    private http: HttpClient,
    private router: Router,
    private share: ShareService)
    { }

    // @Output() event = new EventEmitter<any>();
    // @Output() event2 = new EventEmitter<boolean>();
    // @Output() event3 = new EventEmitter<boolean>();


  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password:[''],
      userId:[]
    })
  }
  
  login(){
    this.http.get<any>("http://localhost:8091/HomeLoan/customers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        this.userId=a.userId;
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password; 
      });
      if(user){
        this.share.showUserFun();
        // this.share.setShow(this.show);
        // this.event.emit(true);
        alert("Login successful !!!");
        console.log("here");
        
        this.share.setUser(this.loginForm.value.email, this.loginForm.value.password,this.userId);
        console.log(this.userId)
        this.loginForm.reset();
        this.router.navigate(['use-das']);
        // this.event2.emit(false);
        // this.event3.emit(true);
      }
      else{
        alert("user not found");
      }
    },err =>{
      alert("Something went wrong!!");
    })
  }





}
