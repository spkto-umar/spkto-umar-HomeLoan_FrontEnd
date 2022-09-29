import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboUsComponent } from './abo-us.component';

describe('AboUsComponent', () => {
  let component: AboUsComponent;
  let fixture: ComponentFixture<AboUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
