import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductsItemComponent } from './poducts-item.component';

describe('PoductsItemComponent', () => {
  let component: PoductsItemComponent;
  let fixture: ComponentFixture<PoductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
