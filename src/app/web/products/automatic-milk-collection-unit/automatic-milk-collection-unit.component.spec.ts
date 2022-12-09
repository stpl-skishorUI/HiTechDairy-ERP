import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticMilkCollectionUnitComponent } from './automatic-milk-collection-unit.component';

describe('AutomaticMilkCollectionUnitComponent', () => {
  let component: AutomaticMilkCollectionUnitComponent;
  let fixture: ComponentFixture<AutomaticMilkCollectionUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomaticMilkCollectionUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomaticMilkCollectionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
