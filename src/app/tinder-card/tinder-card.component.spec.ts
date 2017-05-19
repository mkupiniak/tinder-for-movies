import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderCardComponent } from './tinder-card.component';

describe('TinderCardComponent', () => {
  let component: TinderCardComponent;
  let fixture: ComponentFixture<TinderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});