import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodderSummaryReportComponent } from './fodder-summary-report.component';

describe('FodderSummaryReportComponent', () => {
  let component: FodderSummaryReportComponent;
  let fixture: ComponentFixture<FodderSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodderSummaryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FodderSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
