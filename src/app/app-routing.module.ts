import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAMeetingRoomComponent } from './book-a-meeting-room/book-a-meeting-room.component';
import { MeetingRoomBookingsComponent } from './meeting-room-bookings/meeting-room-bookings.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'book',
    component: BookAMeetingRoomComponent
  },
  {
    path: 'meeting-room-bookings',
    component: MeetingRoomBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
