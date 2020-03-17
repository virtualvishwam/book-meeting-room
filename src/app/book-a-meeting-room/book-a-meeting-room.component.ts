import { Component } from '@angular/core';
import { MeetingRoomDataService } from '../meeting-room-data/meeting-room-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../custom-validators.service';

@Component({
  selector: 'app-book-a-meeting-room',
  templateUrl: './book-a-meeting-room.component.html',
  styleUrls: ['./book-a-meeting-room.component.scss']
})
export class BookAMeetingRoomComponent {

  private meetingRoomList = this.meetingRoomData.meetingRoomList;
  private meetingDate = new Date();


  private bookingForm = new FormGroup({
    username: new FormControl('',[
      Validators.required
    ]),
    meetingRoom: new FormControl('',[
      Validators.required
    ]),
    bookingDate: new FormControl('',[
      Validators.required,
      CustomValidators.dateChecker
    ]),
    bookingFromTime: new FormControl('',[
      Validators.required,
      CustomValidators.timeChecker
    ]),
    bookingToTime: new FormControl('',[
      Validators.required,
      CustomValidators.timeChecker
    ]),
    agenda: new FormControl('', [
      Validators.required
    ])
  }, {
    validators: [
      CustomValidators.toFromTimeChecker
    ]
  });




  get username() {
    return this.bookingForm.get('username');
  }
  get meetingRoom() {
    return this.bookingForm.get('meetingRoom');
  }
  get bookingDate() {
    return this.bookingForm.get('bookingDate');
  }
  get bookingFromTime() {
    return this.bookingForm.get('bookingFromTime');
  }
  get bookingToTime() {
    return this.bookingForm.get('bookingToTime');
  }
  get agenda() {
    return this.bookingForm.get('agenda');
  }


  constructor(private meetingRoomData: MeetingRoomDataService, private router: Router) { }

  submitBookingRequest() {
    let bookingDetails = {
      username: this.username.value,
      bookingDate: this.bookingDate.value,
      bookingFromTime: this.bookingFromTime.value,
      bookingToTime: this.bookingToTime.value,
      agenda: this.agenda.value
    }

    MeetingRoomDataService.meetingRoomBookingDetails[this.meetingRoom.value].push(bookingDetails);

    let alertResponse = window.confirm('Do you want to make another booking?');

    if (alertResponse) {
      this.bookingForm.reset();
    }
    else {
      this.router.navigate(['meeting-room-bookings']);
    }
  }

}
