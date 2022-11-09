import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkPurchaseBillComponent } from './milk-purchase-bill.component';

describe('MilkPurchaseBillComponent', () => {
  let component: MilkPurchaseBillComponent;
  let fixture: ComponentFixture<MilkPurchaseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkPurchaseBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkPurchaseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
