import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RoomCategory } from '../../models/rooms/room-cate/room-cate';
import { BaseService } from '../general/base.service';
import { AuthService } from '../system/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoomCateService extends BaseService<RoomCategory> {
  constructor(auth: AuthService, http: HttpClient, title: Title) {
    super(auth, http, 'RoomCategory', title);
  }
}
