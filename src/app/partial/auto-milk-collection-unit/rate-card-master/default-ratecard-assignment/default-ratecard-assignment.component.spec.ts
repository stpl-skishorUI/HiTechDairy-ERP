import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRatecardAssignmentComponent } from './default-ratecard-assignment.component';

describe('DefaultRatecardAssignmentComponent', () => {
  let component: DefaultRatecardAssignmentComponent;
  let fixture: ComponentFixture<DefaultRatecardAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultRatecardAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultRatecardAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
