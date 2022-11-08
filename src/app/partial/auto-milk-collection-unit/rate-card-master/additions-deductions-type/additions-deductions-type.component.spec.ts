import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionsDeductionsTypeComponent } from './additions-deductions-type.component';

describe('AdditionsDeductionsTypeComponent', () => {
  let component: AdditionsDeductionsTypeComponent;
  let fixture: ComponentFixture<AdditionsDeductionsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionsDeductionsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionsDeductionsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
