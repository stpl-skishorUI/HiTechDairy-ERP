import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPrintReportComponent } from './daily-print-report.component';

describe('DailyPrintReportComponent', () => {
  let component: DailyPrintReportComponent;
  let fixture: ComponentFixture<DailyPrintReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyPrintReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyPrintReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
