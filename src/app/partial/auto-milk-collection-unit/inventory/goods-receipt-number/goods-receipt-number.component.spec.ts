import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsReceiptNumberComponent } from './goods-receipt-number.component';

describe('GoodsReceiptNumberComponent', () => {
  let component: GoodsReceiptNumberComponent;
  let fixture: ComponentFixture<GoodsReceiptNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsReceiptNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsReceiptNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
