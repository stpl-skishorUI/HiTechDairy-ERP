import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRegistrationFormComponent } from './item-registration-form.component';

describe('ItemRegistrationFormComponent', () => {
  let component: ItemRegistrationFormComponent;
  let fixture: ComponentFixture<ItemRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
