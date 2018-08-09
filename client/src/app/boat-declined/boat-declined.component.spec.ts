import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatDeclinedComponent } from './boat-declined.component';

describe('BoatDeclinedComponent', () => {
  let component: BoatDeclinedComponent;
  let fixture: ComponentFixture<BoatDeclinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatDeclinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatDeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
