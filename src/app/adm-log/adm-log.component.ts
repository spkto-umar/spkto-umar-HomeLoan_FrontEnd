import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';  
import { Router } from '@angular/router';
import { ShareService } from '../services/share.service';


@Component({
  selector: 'app-adm-log',
  templateUrl: './adm-log.component.html',
  styleUrls: ['./adm-log.component.css']
})
export class AdmLogComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private formbuilder : FormBuilder,
              private http: HttpClient,
              private router: Router,
              private share: ShareService)
  { }


  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      id: [''],
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:8091/HomeLoan/admins")
    .subscribe(res=>{
      const admin = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password; 
      });
      if(admin){
        this.share.showAdminFun();
        alert("Login successful !!!");
        this.loginForm.reset();
        this.router.navigate(['adm-das'])
      }
      else{
        alert("admin not found");
      }
    },err =>{
      alert("Something went wrong!!");
    })
  }

}
