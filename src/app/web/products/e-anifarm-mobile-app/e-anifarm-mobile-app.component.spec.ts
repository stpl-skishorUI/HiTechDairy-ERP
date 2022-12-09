import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAnifarmMobileAppComponent } from './e-anifarm-mobile-app.component';

describe('EAnifarmMobileAppComponent', () => {
  let component: EAnifarmMobileAppComponent;
  let fixture: ComponentFixture<EAnifarmMobileAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAnifarmMobileAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EAnifarmMobileAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
