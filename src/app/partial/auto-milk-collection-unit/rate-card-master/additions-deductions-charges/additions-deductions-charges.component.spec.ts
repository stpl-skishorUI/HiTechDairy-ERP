import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionsDeductionsChargesComponent } from './additions-deductions-charges.component';

describe('AdditionsDeductionsChargesComponent', () => {
  let component: AdditionsDeductionsChargesComponent;
  let fixture: ComponentFixture<AdditionsDeductionsChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionsDeductionsChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionsDeductionsChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
