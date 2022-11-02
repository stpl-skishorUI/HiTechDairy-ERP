import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterMasterComponent } from './parameter-master.component';

describe('ParameterMasterComponent', () => {
  let component: ParameterMasterComponent;
  let fixture: ComponentFixture<ParameterMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
