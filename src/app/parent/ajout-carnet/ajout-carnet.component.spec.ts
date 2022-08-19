import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCarnetComponent } from './ajout-carnet.component';

describe('AjoutCarnetComponent', () => {
  let component: AjoutCarnetComponent;
  let fixture: ComponentFixture<AjoutCarnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCarnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
