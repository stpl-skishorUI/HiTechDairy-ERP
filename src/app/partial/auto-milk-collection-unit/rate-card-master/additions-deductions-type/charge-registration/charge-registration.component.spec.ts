import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeRegistrationComponent } from './charge-registration.component';

describe('ChargeRegistrationComponent', () => {
  let component: ChargeRegistrationComponent;
  let fixture: ComponentFixture<ChargeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
