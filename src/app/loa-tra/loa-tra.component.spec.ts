import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaTraComponent } from './loa-tra.component';

describe('LoaTraComponent', () => {
  let component: LoaTraComponent;
  let fixture: ComponentFixture<LoaTraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaTraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
