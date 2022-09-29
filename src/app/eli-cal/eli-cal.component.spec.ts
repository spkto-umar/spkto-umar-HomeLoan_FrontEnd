import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliCalComponent } from './eli-cal.component';

describe('EliCalComponent', () => {
  let component: EliCalComponent;
  let fixture: ComponentFixture<EliCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
