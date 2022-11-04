import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchRegistrationComponent } from './branch-registration.component';

describe('BranchRegistrationComponent', () => {
  let component: BranchRegistrationComponent;
  let fixture: ComponentFixture<BranchRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
