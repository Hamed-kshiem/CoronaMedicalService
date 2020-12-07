import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStaffViewComponent } from './single-staff-view.component';

describe('SingleStaffViewComponent', () => {
  let component: SingleStaffViewComponent;
  let fixture: ComponentFixture<SingleStaffViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStaffViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStaffViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
