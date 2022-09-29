import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppforService } from '../services/appfor.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-loa-tra',
  templateUrl: './loa-tra.component.html',
  styleUrls: ['./loa-tra.component.css']
})
export class LoaTraComponent implements OnInit {

  toggle : boolean = true;

  loanId !: number;
  amount !: number;
  status !: string;


  constructor(private share: ShareService,
              private http: HttpClient,
              private api: AppforService) { }

  ngOnInit(): void {
    let user_details : string[] = this.share.getUser();
    this.http.get<any>("http://localhost:8091/HomeLoan/loan/"+parseInt(user_details[2]))
    .subscribe(res=>{
      //const something = res.find((a:any)=>{
        //return a.customer.email === user_details[0] && a.customer.password === user_details[1];
       // return true;
          // this.loanId = a.applicationId;
          // this.amount = a.loanAmount;
          // this.status = a.status;
          // this.monthlySalary = a.monthlySalary;
          // this.organization = a.organization;
          // this.user = a.user;
          // this.id = a.id;
       // });
      if(1){console.log("hai application"); this.toggle = false}
      else{console.log("nahi hai application");}
    },err =>{
      alert("Something went wrong!!");
    })

    this.getTracker();

  }

  getTracker(){
    let user_details : string[] = this.share.getUser();
    this.http.get<any>("http://localhost:8091/HomeLoan/loan/"+parseInt(user_details[2]))
    .subscribe(res=>{
      //const user = res.find((a:any)=>{
        this.loanId = res.applicationId;
          this.amount = res.loanAmount;
          this.status = res.status;
        

        // if(a.customer.email === user_details[0] && a.customer.password === user_details[1]){
        //   this.loanId = a.id;
        //   this.amount = a.loanAmount;
        //   this.status = a.status;
        // }  
      // });
      if(1){}
      else{alert("user not found");}
    },err =>{
      alert("Something went wrong!!");
    })
  }

}
