import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateChartRegistrationComponent } from './rate-chart-registration.component';

describe('RateChartRegistrationComponent', () => {
  let component: RateChartRegistrationComponent;
  let fixture: ComponentFixture<RateChartRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateChartRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateChartRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
