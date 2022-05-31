import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { RoomCateActionComponent } from './room-cate/room-cate-action/room-cate-action.component';
import { RoomCateListComponent } from './room-cate/room-cate-list/room-cate-list.component';
import { RoomRoutingModule } from './room-routing.module';
import { RoomStatusActionComponent } from './room-status/room-status-action/room-status-action.component';
import { RoomStatusListComponent } from './room-status/room-status-list/room-status-list.component';
import { RoomComponent } from './room.component';
import { RoomActionComponent } from './room/room-action/room-action.component';
import { RoomListComponent } from './room/room-list/room-list.component';


@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        RoomRoutingModule
    ],
    declarations: [
        RoomComponent,
        RoomCateActionComponent,
        RoomCateListComponent,
        RoomActionComponent,
        RoomListComponent,
        RoomStatusActionComponent,
        RoomStatusListComponent
    ],
    bootstrap: [RoomComponent],
})
export class RoomModule { }
