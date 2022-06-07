import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RoomStatus } from '../../models/rooms/room-status/room-status';
import { BaseService } from '../general/base.service';
import { AuthService } from '../system/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoomStatusService extends BaseService<RoomStatus> {

constructor(authService: AuthService, http: HttpClient, title:Title,) { 
  super(authService, http, 'RoomStatus', title);
}

}
