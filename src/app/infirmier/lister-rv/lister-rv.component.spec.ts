import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerRvComponent } from './lister-rv.component';

describe('ListerRvComponent', () => {
  let component: ListerRvComponent;
  let fixture: ComponentFixture<ListerRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerRvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
