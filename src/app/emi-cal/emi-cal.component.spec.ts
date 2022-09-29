import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalComponent } from './emi-cal.component';

describe('EmiCalComponent', () => {
  let component: EmiCalComponent;
  let fixture: ComponentFixture<EmiCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
