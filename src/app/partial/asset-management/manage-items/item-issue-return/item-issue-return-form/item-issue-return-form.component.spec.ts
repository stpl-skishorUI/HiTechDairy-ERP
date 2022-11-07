import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIssueReturnFormComponent } from './item-issue-return-form.component';

describe('ItemIssueReturnFormComponent', () => {
  let component: ItemIssueReturnFormComponent;
  let fixture: ComponentFixture<ItemIssueReturnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIssueReturnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemIssueReturnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
