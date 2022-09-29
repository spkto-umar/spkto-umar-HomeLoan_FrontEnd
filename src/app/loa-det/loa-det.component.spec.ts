import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaDetComponent } from './loa-det.component';

describe('LoaDetComponent', () => {
  let component: LoaDetComponent;
  let fixture: ComponentFixture<LoaDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
