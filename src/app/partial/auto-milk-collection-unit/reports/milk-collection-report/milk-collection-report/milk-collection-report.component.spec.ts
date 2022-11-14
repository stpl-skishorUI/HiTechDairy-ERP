import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkCollectionReportComponent } from './milk-collection-report.component';

describe('MilkCollectionReportComponent', () => {
  let component: MilkCollectionReportComponent;
  let fixture: ComponentFixture<MilkCollectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkCollectionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkCollectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
