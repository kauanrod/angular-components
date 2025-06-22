import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRedButtonComponent } from './card-red-button.component';

describe('CardRedButtonComponent', () => {
  let component: CardRedButtonComponent;
  let fixture: ComponentFixture<CardRedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRedButtonComponent]
    });
    fixture = TestBed.createComponent(CardRedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
