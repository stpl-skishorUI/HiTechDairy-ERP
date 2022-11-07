import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuDashboardComponent } from './amcu-dashboard.component';

describe('AmcuDashboardComponent', () => {
  let component: AmcuDashboardComponent;
  let fixture: ComponentFixture<AmcuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmcuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
