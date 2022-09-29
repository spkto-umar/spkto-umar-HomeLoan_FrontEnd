import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-use-nav',
  templateUrl: './use-nav.component.html',
  styleUrls: ['./use-nav.component.css']
})
export class UseNavComponent implements OnInit {

  constructor(
    private share : ShareService,
    private router : Router,
    private http : HttpClient
              ) { }

  ngOnInit(): void {
  }

  logout(){
    this.http.get<any>("http://localhost:8091/HomeLoan/customers")
    .subscribe(res=>{
      const admin = res.find((a:any)=>{
        // return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password; 
      });
      // if(admin){
        this.share.showOtherFun();
        alert("Logout successful !!!");
        // this.loginForm.reset();
        this.router.navigate(['home']);
      // }
      // else{
      //   alert("admin not found");
      // }
    },err =>{
      alert("Something went wrong!!");
    })
  }
    // this.http.get<any>("http://localhost:3000/admins")
    // .subscribe(res=>{
    //   const admin = res.find((a:any)=>{
    //     return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password; 
    //   });
    //   if(admin){ 
    //     alert("Login successful !!!");
    //     this.loginForm.reset();
    //   }
    //   else{
    //     alert("admin not found");
    //   }
    // },err =>{
    //   alert("Something went wrong!!");
    // })
  // }

}
