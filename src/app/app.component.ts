import { Component } from '@angular/core';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showOther : boolean = true;
  showUser : boolean = false;
  showAdmin : boolean = false;
  title = 'HomeLoan';

  constructor(private share: ShareService){
    
  }
  ngOnInit():void{

    this.share.$isLoggedIn
    .subscribe((data) =>{
      console.log("I got data in app comp", data);
      console.log("called from logout", data);
      
      this.showOther = data[0]; 
      this.showUser = data[1]; 
      this.showAdmin = data[2];
    })

    // console.log("123");  
    // this.show = this.share.showShow();
    // console.log("321");
  }

}

  // recieveMessage($event : any){
  //   console.log("app ts worked");
  //   this.show = $event;}


