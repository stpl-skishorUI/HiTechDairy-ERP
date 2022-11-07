import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageRegistrationComponent } from './village-registration.component';

describe('VillageRegistrationComponent', () => {
  let component: VillageRegistrationComponent;
  let fixture: ComponentFixture<VillageRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
