import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-adm-nav',
  templateUrl: './adm-nav.component.html',
  styleUrls: ['./adm-nav.component.css']
})
export class AdmNavComponent implements OnInit {

  constructor(
    private share : ShareService,
    private router : Router,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  // logout(){
  //   this.share.$isLoggedIn
  //   .subscribe((data) =>{
  //     this.share.showOtherFun();
  //     console.log("successfully logged out");
  //     this.router.navigate(['home'])
  //   })
  // }


    logout(){
      this.http.get<any>("http://localhost:8091/HomeLoan/admins")
      .subscribe(res=>{
        const admin = res.find((a:any)=>{
          // return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password; 
        });
        // if(admin){
          this.share.showOtherFun();
          alert("logout successful !!!");
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

}

