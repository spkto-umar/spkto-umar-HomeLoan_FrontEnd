import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncDetComponent } from './inc-det.component';

describe('IncDetComponent', () => {
  let component: IncDetComponent;
  let fixture: ComponentFixture<IncDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
