import { Component, OnInit } from '@angular/core';
import { MeetingRoomDataService } from '../meeting-room-data/meeting-room-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-ameeting-room',
  templateUrl: './book-a-meeting-room.component.html',
  styleUrls: ['./book-a-meeting-room.component.scss']
})
export class BookAMeetingRoomComponent implements OnInit {

  private meetingRoomList =  this.meetingRoomData.meetingRoomList;
  private meetingDate = new Date();


  private bookingForm = new FormGroup({
    username: new FormControl(''),
    meetingRooms: new FormControl(''),
    bookingDate: new FormControl(''),
    bookingFromTime: new FormControl(''),
    bookingToTime: new FormControl(''),
    agenda: new FormControl('')
  })

  constructor(private meetingRoomData: MeetingRoomDataService) { }

  ngOnInit() {
  }

}
