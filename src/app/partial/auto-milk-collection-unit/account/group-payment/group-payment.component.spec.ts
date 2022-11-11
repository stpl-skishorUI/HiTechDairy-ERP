import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPaymentComponent } from './group-payment.component';

describe('GroupPaymentComponent', () => {
  let component: GroupPaymentComponent;
  let fixture: ComponentFixture<GroupPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
