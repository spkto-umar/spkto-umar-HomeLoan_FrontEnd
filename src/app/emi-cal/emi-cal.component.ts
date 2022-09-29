import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emi-cal',
  templateUrl: './emi-cal.component.html',
  styleUrls: ['./emi-cal.component.css']
})
export class EmiCalComponent implements OnInit {

  loanAmount !: number;
  tenureInMonths !: number;
  interest !: number;
  emi !: number;

  formValue !: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      loanAmount : [''],
      tenureInMonths : [''],
      interest : [''],
      emi : ['']
    })
  }

  calculateEMI(){
    this.loanAmount = this.formValue.value.loanAmount;
    this.tenureInMonths = this.formValue.value.tenureInMonths;
    this.interest = this.formValue.value.interest;

    this.calculate();
  }

  calculate() {
    this.interest = (this.loanAmount * (this.interest*0.01))/this.tenureInMonths;
    this.emi = Number((this.loanAmount /this.tenureInMonths + this.interest).toFixed(2));
  }

  

}
