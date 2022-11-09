import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkCollectionListComponent } from './milk-collection-list.component';

describe('MilkCollectionListComponent', () => {
  let component: MilkCollectionListComponent;
  let fixture: ComponentFixture<MilkCollectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkCollectionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
