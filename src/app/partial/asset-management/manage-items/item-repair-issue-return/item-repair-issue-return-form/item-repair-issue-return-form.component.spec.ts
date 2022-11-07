import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRepairIssueReturnFormComponent } from './item-repair-issue-return-form.component';

describe('ItemRepairIssueReturnFormComponent', () => {
  let component: ItemRepairIssueReturnFormComponent;
  let fixture: ComponentFixture<ItemRepairIssueReturnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRepairIssueReturnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRepairIssueReturnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
