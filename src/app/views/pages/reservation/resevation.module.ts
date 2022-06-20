import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationRoutingModule } from '../reservation/reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { ReservationActionComponent } from './reservation-action/reservation-action.component';

@NgModule({
  imports: [CommonModule, SharedModule, ReservationRoutingModule],
  declarations: [
    ReservationListComponent,
    ReservationComponent,
    ReservationActionComponent,
  ],
})
export class ReservationModule {}
