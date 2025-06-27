import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRedCancelButtonComponent } from './card-red-cancel-button.component';

describe('CardRedCancelButtonComponent', () => {
  let component: CardRedCancelButtonComponent;
  let fixture: ComponentFixture<CardRedCancelButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRedCancelButtonComponent]
    });
    fixture = TestBed.createComponent(CardRedCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
