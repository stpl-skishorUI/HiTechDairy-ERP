import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMilkCollectionComponent } from './doc-milk-collection.component';

describe('DocMilkCollectionComponent', () => {
  let component: DocMilkCollectionComponent;
  let fixture: ComponentFixture<DocMilkCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMilkCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocMilkCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
