import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLogComponent } from './adm-log.component';

describe('AdmLogComponent', () => {
  let component: AdmLogComponent;
  let fixture: ComponentFixture<AdmLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
