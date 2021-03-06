import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomDataService {

  meetingRoomList = ['Bulbasaur','Charmandar','Squirtle','Pikachu','Jigglypuff','Abra','Gengar','Ditto','Mewtwo','Mew'];

  static meetingRoomBookingDetails = {
    Bulbasaur : [],
    Charmandar : [],
    Squirtle: [],
    Pikachu: [],
    Jigglypuff: [],
    Abra: [],
    Gengar:[],
    Ditto: [],
    Mewtwo: [],
    Mew: []
  }

  constructor() { }

  deleteBooking(roomName, index) {
    MeetingRoomDataService.meetingRoomBookingDetails[roomName].splice(index,1);
  }
}
