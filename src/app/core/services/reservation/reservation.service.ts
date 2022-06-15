import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Reservation } from '../../models/resevation/resevation';
import { BaseService } from '../general/base.service';
import { AuthService } from '../system/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService extends BaseService<Reservation> {
  constructor(
    public _auth: AuthService,
    public _http: HttpClient,
    title: Title
  ) {
    super(_auth, _http, 'Reservation', title);
  }
}
