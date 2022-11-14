import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSummaryReportComponent } from './advance-summary-report.component';

describe('AdvanceSummaryReportComponent', () => {
  let component: AdvanceSummaryReportComponent;
  let fixture: ComponentFixture<AdvanceSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceSummaryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
