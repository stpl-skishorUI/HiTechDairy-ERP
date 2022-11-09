import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllBillsComponent } from './delete-all-bills.component';

describe('DeleteAllBillsComponent', () => {
  let component: DeleteAllBillsComponent;
  let fixture: ComponentFixture<DeleteAllBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
