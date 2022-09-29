import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppforService {

  constructor(private http : HttpClient) { }

  postUser(data : any){
    return this.http.post<any>("http://localhost:8091/HomeLoan/customers", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateUser(data : any, id : number){
    return this.http.put<any>("http://localhost:8091/HomeLoan/customers/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateIncome(data : any, id : number){
    return this.http.put<any>("http://localhost:8091/HomeLoan/incomedetails/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateLoan(data : any, id : number){
    return this.http.put<any>("http://localhost:8091/HomeLoan/loan/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  postIncDet(data : any,userId:number){
    return this.http.post<any>("http://localhost:8091/HomeLoan/incomedetails/"+userId, data)       //http://localhost:3000/inc-det
    .pipe(map((res:any) => {
      return res;
    }))
  }

  postLoaDet(data : any,userId:number){
    return this.http.post<any>("http://localhost:8091/HomeLoan/loan/"+userId, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getLoan(): Observable<any> {
    return this.http.get<any>("http://localhost:8091/HomeLoan/loan")
    
      
    }

}