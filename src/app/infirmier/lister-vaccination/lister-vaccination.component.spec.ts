import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerVaccinationComponent } from './lister-vaccination.component';

describe('ListerVaccinationComponent', () => {
  let component: ListerVaccinationComponent;
  let fixture: ComponentFixture<ListerVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
