import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDasComponent } from './use-das.component';

describe('UseDasComponent', () => {
  let component: UseDasComponent;
  let fixture: ComponentFixture<UseDasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseDasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseDasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
