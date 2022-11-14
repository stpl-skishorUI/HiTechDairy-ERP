import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkPurchaseBillSummaryReportComponent } from './milk-purchase-bill-summary-report.component';

describe('MilkPurchaseBillSummaryReportComponent', () => {
  let component: MilkPurchaseBillSummaryReportComponent;
  let fixture: ComponentFixture<MilkPurchaseBillSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkPurchaseBillSummaryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkPurchaseBillSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
