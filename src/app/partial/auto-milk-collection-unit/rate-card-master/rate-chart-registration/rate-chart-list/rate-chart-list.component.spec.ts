import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateChartListComponent } from './rate-chart-list.component';

describe('RateChartListComponent', () => {
  let component: RateChartListComponent;
  let fixture: ComponentFixture<RateChartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateChartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateChartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
