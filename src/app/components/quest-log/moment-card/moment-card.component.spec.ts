import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentCardComponent } from './moment-card.component';

describe('MomentCardComponent', () => {
  let component: MomentCardComponent;
  let fixture: ComponentFixture<MomentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
