import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodownStockReportComponent } from './godown-stock-report.component';

describe('GodownStockReportComponent', () => {
  let component: GodownStockReportComponent;
  let fixture: ComponentFixture<GodownStockReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodownStockReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodownStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
