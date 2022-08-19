import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCarnetComponent } from './lister-carnet.component';

describe('ListerCarnetComponent', () => {
  let component: ListerCarnetComponent;
  let fixture: ComponentFixture<ListerCarnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerCarnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
