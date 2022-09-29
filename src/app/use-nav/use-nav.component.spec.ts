import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNavComponent } from './use-nav.component';

describe('UseNavComponent', () => {
  let component: UseNavComponent;
  let fixture: ComponentFixture<UseNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
