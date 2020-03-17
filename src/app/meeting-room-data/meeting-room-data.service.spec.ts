import { TestBed } from '@angular/core/testing';

import { MeetingRoomDataService } from './meeting-room-data.service';

describe('MeetingRoomDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeetingRoomDataService = TestBed.get(MeetingRoomDataService);
    expect(service).toBeTruthy();
  });
});
