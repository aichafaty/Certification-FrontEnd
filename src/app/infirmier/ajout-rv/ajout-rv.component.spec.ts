import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRvComponent } from './ajout-rv.component';

describe('AjoutRvComponent', () => {
  let component: AjoutRvComponent;
  let fixture: ComponentFixture<AjoutRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
