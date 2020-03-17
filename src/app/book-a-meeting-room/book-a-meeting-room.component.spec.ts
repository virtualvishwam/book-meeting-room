import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAMeetingRoomComponent } from './book-a-meeting-room.component';

describe('BookAMeetingRoomComponent', () => {
  let component: BookAMeetingRoomComponent;
  let fixture: ComponentFixture<BookAMeetingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAMeetingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAMeetingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
