import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwiseCuttingComponent } from './customerwise-cutting.component';

describe('CustomerwiseCuttingComponent', () => {
  let component: CustomerwiseCuttingComponent;
  let fixture: ComponentFixture<CustomerwiseCuttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerwiseCuttingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerwiseCuttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
