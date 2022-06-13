import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Room } from '../../models/rooms/room/room';
import { BaseService } from '../general/base.service';
import { AuthService } from '../system/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService extends BaseService<Room> {
  constructor(_auth: AuthService, _http: HttpClient, title: Title) {
    super(_auth, _http, 'Room', title);
  }
}
