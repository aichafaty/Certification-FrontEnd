import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvParentComponent } from './rv-parent.component';

describe('RvParentComponent', () => {
  let component: RvParentComponent;
  let fixture: ComponentFixture<RvParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
