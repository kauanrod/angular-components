import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRedComponent } from './card-red.component';

describe('CardRedComponent', () => {
  let component: CardRedComponent;
  let fixture: ComponentFixture<CardRedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRedComponent]
    });
    fixture = TestBed.createComponent(CardRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
