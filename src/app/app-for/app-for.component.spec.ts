import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppForComponent } from './app-for.component';

describe('AppForComponent', () => {
  let component: AppForComponent;
  let fixture: ComponentFixture<AppForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
