import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  userId!:number;
  user_email !: string;
  user_password !: string;
  
  $isLoggedIn = new EventEmitter();
  Other : boolean = true;
  User : boolean = true;
  Admin : boolean = true;
  

  constructor() { }

  showOtherFun(){
    console.log("aaaaaaaahhhhhh!!!");
    let val: boolean[] = [true, false, false];
    this.$isLoggedIn.emit(val);
  }
  
  showUserFun(){
    console.log("aaaaaaaahhhhhh!!!");
    let val: boolean[] = [false, true, false];
    this.$isLoggedIn.emit(val);
  }

  showAdminFun(){
    console.log("aaaaaaaahhhhhh!!!");
    let val: boolean[] = [false, false, true];
    this.$isLoggedIn.emit(val);
  }
  
  
  setUser(email : string, password : string, userId : number){
    this.user_email = email;
    this.user_password = password;
    this.userId=userId;
  }
  
  getUser(){
    let user_details : string[] = [this.user_email, this.user_password,this.userId+""];
    return user_details;
  }



  // getShow(){
  //   return this.show;
  // }

  // setShow(data : boolean){
  //   this.show = data;
  // }

  // setShowAdmin(data : any){
  //   	this.showAdmin = data; 
  // }

  // getShowAdmin(){
  //   return this.showAdmin;
  // }

  // setShowUser(data : any){
  //   	this.showUser = data; 
  // }

  // getShowUser(){
  //   return this.showUser;
  // }

  // setShowLogout(data : any){
  //   	this.showLogout = data; 
  // }

  // getShowLogout(){
  //   return this.showLogout;
  // }

}
