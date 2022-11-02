import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDashboardComponent } from './asset-dashboard.component';

describe('AssetDashboardComponent', () => {
  let component: AssetsDashboardComponent;
  let fixture: ComponentFixture<AssetsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
