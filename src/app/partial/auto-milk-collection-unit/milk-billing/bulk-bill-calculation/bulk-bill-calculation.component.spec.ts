import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkBillCalculationComponent } from './bulk-bill-calculation.component';

describe('BulkBillCalculationComponent', () => {
  let component: BulkBillCalculationComponent;
  let fixture: ComponentFixture<BulkBillCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkBillCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkBillCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
