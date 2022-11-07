import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkCollectorRegistrationComponent } from './milk-collector-registration.component';

describe('MilkCollectorRegistrationComponent', () => {
  let component: MilkCollectorRegistrationComponent;
  let fixture: ComponentFixture<MilkCollectorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkCollectorRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkCollectorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
