import { Component } from '@angular/core';
import { MeetingRoomDataService } from '../meeting-room-data/meeting-room-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-room-bookings',
  templateUrl: './meeting-room-bookings.component.html',
  styleUrls: ['./meeting-room-bookings.component.scss']
})
export class MeetingRoomBookingsComponent {

  private meetingRooms = [];


  constructor(private meetingRoomData: MeetingRoomDataService, private router: Router) {
    this.initializeData();
  }

  initializeData() {
    Object.keys(MeetingRoomDataService.meetingRoomBookingDetails).forEach(
      element => {
        let tempObj = {};
        tempObj['roomName'] = element;
        tempObj['expanded'] = false;
        tempObj['roomBookingDetails'] = MeetingRoomDataService.meetingRoomBookingDetails[element];

        this.meetingRooms.push(tempObj);
      }
    );
  }

  bookAnotherRoom() {
    this.router.navigate(['book']);
  }

  deleteBooking(roomName, index) {
    let alertResponse = window.confirm('Do you want to delete this booking?');
    if (alertResponse) {
      this.meetingRoomData.deleteBooking(roomName, index);
      this.initializeData();
    }
  }


}
