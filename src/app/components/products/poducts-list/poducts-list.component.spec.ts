import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductsListComponent } from './poducts-list.component';

describe('PoductsListComponent', () => {
  let component: PoductsListComponent;
  let fixture: ComponentFixture<PoductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
