import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkBagProductionComponent } from './milk-bag-production.component';

describe('MilkBagProductionComponent', () => {
  let component: MilkBagProductionComponent;
  let fixture: ComponentFixture<MilkBagProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkBagProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkBagProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
