import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillReportComponent } from './customer-bill-report.component';

describe('CustomerBillReportComponent', () => {
  let component: CustomerBillReportComponent;
  let fixture: ComponentFixture<CustomerBillReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBillReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
