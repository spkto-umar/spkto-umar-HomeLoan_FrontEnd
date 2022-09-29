import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseLogComponent } from './use-log.component';

describe('UseLogComponent', () => {
  let component: UseLogComponent;
  let fixture: ComponentFixture<UseLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
