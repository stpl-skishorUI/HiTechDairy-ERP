import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRegistrationComponent } from './material-registration.component';

describe('MaterialRegistrationComponent', () => {
  let component: MaterialRegistrationComponent;
  let fixture: ComponentFixture<MaterialRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
