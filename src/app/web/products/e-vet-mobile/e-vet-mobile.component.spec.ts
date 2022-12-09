import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVetMobileComponent } from './e-vet-mobile.component';

describe('EVetMobileComponent', () => {
  let component: EVetMobileComponent;
  let fixture: ComponentFixture<EVetMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVetMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVetMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
