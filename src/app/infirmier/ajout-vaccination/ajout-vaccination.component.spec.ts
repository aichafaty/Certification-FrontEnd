import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVaccinationComponent } from './ajout-vaccination.component';

describe('AjoutVaccinationComponent', () => {
  let component: AjoutVaccinationComponent;
  let fixture: ComponentFixture<AjoutVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
