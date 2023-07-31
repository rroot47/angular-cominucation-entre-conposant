import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductsNavbarComponent } from './poducts-navbar.component';

describe('PoductsNavbarComponent', () => {
  let component: PoductsNavbarComponent;
  let fixture: ComponentFixture<PoductsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
