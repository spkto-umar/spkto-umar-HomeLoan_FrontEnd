import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDetComponent } from './pro-det.component';

describe('ProDetComponent', () => {
  let component: ProDetComponent;
  let fixture: ComponentFixture<ProDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
