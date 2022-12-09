import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementWebPanelComponent } from './procurement-web-panel.component';

describe('ProcurementWebPanelComponent', () => {
  let component: ProcurementWebPanelComponent;
  let fixture: ComponentFixture<ProcurementWebPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementWebPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementWebPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
