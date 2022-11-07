import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAccountRegistrationComponent } from './company-account-registration.component';

describe('CompanyAccountRegistrationComponent', () => {
  let component: CompanyAccountRegistrationComponent;
  let fixture: ComponentFixture<CompanyAccountRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAccountRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAccountRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
