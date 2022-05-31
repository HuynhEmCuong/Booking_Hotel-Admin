import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomCateListComponent } from "./room-cate/room-cate-list/room-cate-list.component";
import { RoomStatusListComponent } from "./room-status/room-status-list/room-status-list.component";
import { RoomListComponent } from "./room/room-list/room-list.component";

const routes: Routes = [
    {
        path: 'list-cate',
        component: RoomCateListComponent
    }, {
        path: 'list',
        component: RoomListComponent
    },
    {
        path: 'list-status',
        component: RoomStatusListComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoomRoutingModule { }