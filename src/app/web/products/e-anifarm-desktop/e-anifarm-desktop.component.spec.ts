import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAnifarmDesktopComponent } from './e-anifarm-desktop.component';

describe('EAnifarmDesktopComponent', () => {
  let component: EAnifarmDesktopComponent;
  let fixture: ComponentFixture<EAnifarmDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAnifarmDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EAnifarmDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
