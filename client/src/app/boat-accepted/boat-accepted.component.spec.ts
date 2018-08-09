import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatAcceptedComponent } from './boat-accepted.component';

describe('BoatAcceptedComponent', () => {
  let component: BoatAcceptedComponent;
  let fixture: ComponentFixture<BoatAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
