import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomBookingsComponent } from './meeting-room-bookings.component';

describe('MeetingRoomBookingsComponent', () => {
  let component: MeetingRoomBookingsComponent;
  let fixture: ComponentFixture<MeetingRoomBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRoomBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
