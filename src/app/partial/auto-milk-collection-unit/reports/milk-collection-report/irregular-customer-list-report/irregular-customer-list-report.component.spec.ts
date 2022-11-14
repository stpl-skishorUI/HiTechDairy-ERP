import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularCustomerListReportComponent } from './irregular-customer-list-report.component';

describe('IrregularCustomerListReportComponent', () => {
  let component: IrregularCustomerListReportComponent;
  let fixture: ComponentFixture<IrregularCustomerListReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrregularCustomerListReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrregularCustomerListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
