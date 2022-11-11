import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartywiseMaterialRateComponent } from './partywise-material-rate.component';

describe('PartywiseMaterialRateComponent', () => {
  let component: PartywiseMaterialRateComponent;
  let fixture: ComponentFixture<PartywiseMaterialRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartywiseMaterialRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartywiseMaterialRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
