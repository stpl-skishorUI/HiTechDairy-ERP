import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCardCategoryComponent } from './rate-card-category.component';

describe('RateCardCategoryComponent', () => {
  let component: RateCardCategoryComponent;
  let fixture: ComponentFixture<RateCardCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCardCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateCardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
