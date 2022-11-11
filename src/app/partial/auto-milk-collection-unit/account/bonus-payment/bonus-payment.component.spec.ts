import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusPaymentComponent } from './bonus-payment.component';

describe('BonusPaymentComponent', () => {
  let component: BonusPaymentComponent;
  let fixture: ComponentFixture<BonusPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
