import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySupervisorComponent } from './daily-supervisor.component';

describe('DailySupervisorComponent', () => {
  let component: DailySupervisorComponent;
  let fixture: ComponentFixture<DailySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
