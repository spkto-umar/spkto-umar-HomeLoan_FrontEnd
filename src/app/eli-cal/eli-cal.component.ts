import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eli-cal',
  templateUrl: './eli-cal.component.html',
  styleUrls: ['./eli-cal.component.css']
})
export class EliCalComponent implements OnInit {

  monthlyIncome !: number;
  eligibileLoanAmount !: number;
  val:number=0.6;

  formValue !: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      monthlyIncome : [''],
    })
  }

  calculateELI(){
    this.monthlyIncome = this.formValue.value.monthlyIncome;

    this.calculate();
  }

  calculate() {
    this.eligibileLoanAmount = 60 * (this.val * this.monthlyIncome);
  }

}
