import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemScrapDonatedFormComponent } from './item-scrap-donated-form.component';

describe('ItemScrapDonatedFormComponent', () => {
  let component: ItemScrapDonatedFormComponent;
  let fixture: ComponentFixture<ItemScrapDonatedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemScrapDonatedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemScrapDonatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
