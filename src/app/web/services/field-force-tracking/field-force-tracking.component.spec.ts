import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldForceTrackingComponent } from './field-force-tracking.component';

describe('FieldForceTrackingComponent', () => {
  let component: FieldForceTrackingComponent;
  let fixture: ComponentFixture<FieldForceTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldForceTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldForceTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
