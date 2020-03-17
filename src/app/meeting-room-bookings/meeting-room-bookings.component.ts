import { Component } from '@angular/core';
import { MeetingRoomDataService } from '../meeting-room-data/meeting-room-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-room-bookings',
  templateUrl: './meeting-room-bookings.component.html',
  styleUrls: ['./meeting-room-bookings.component.scss']
})
export class MeetingRoomBookingsComponent {

  private get meetingRooms() {
    let meetingRoomList = [];

    Object.keys(MeetingRoomDataService.meetingRoomBookingDetails).forEach(
      element => {
        let tempObj = {};
        tempObj['roomName'] = element;
        tempObj['roomBookingDetails'] = MeetingRoomDataService.meetingRoomBookingDetails[element];

        meetingRoomList.push(tempObj);
      }
    );

    return meetingRoomList;
  }


  constructor(private meetingRoomData: MeetingRoomDataService, private router:Router) {

  }


  bookAnotherRoom() {
    this.router.navigate(['book']);
  }

}
