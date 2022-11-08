import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeCategoryComponent } from './charge-category.component';

describe('ChargeCategoryComponent', () => {
  let component: ChargeCategoryComponent;
  let fixture: ComponentFixture<ChargeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
