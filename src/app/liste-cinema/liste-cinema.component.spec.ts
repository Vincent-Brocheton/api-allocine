import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCinemaComponent } from './liste-cinema.component';

describe('ListeCinemaComponent', () => {
  let component: ListeCinemaComponent;
  let fixture: ComponentFixture<ListeCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
