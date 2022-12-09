import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProcessorComponent } from './e-processor.component';

describe('EProcessorComponent', () => {
  let component: EProcessorComponent;
  let fixture: ComponentFixture<EProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EProcessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
