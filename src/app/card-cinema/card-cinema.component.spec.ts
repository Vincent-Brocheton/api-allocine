import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCinemaComponent } from './card-cinema.component';

describe('CardCinemaComponent', () => {
  let component: CardCinemaComponent;
  let fixture: ComponentFixture<CardCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
