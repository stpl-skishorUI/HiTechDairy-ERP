import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTransferFormComponent } from './item-transfer-form.component';

describe('ItemTransferFormComponent', () => {
  let component: ItemTransferFormComponent;
  let fixture: ComponentFixture<ItemTransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTransferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
