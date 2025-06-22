import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPurpleButtonComponent } from './card-purple-button.component';

describe('CardPurpleButtonComponent', () => {
  let component: CardPurpleButtonComponent;
  let fixture: ComponentFixture<CardPurpleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPurpleButtonComponent]
    });
    fixture = TestBed.createComponent(CardPurpleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
