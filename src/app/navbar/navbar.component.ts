import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showAdmin : boolean = true;
  showUser : boolean = true;
  showLogout : boolean = false;

  constructor() {
    
   }

  ngOnInit(): void {

  }

  receiveMessage($event1 : any, $event2: any, $event3: any){
    console.log("receive call ho raha hai kya");
    this.showAdmin = $event1;
    this.showUser = $event2;
    this.showLogout = $event3;
  }
  // receiveMessage($event2 : any){
  // }
  // receiveMessage($event3 : any){
  // }

}
