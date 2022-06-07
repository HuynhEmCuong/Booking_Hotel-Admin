import { Status } from "src/app/core/enums/status.enum";
import { RoomStatus } from "../room-status/room-status";

export class Room {
    id: number;
    name: string;
    code: string;
    description: string;
    position: number;
    status: Status;
    roomCateId: number;
    roomStatusId: number;
    createBy: number | null;
    modifyBy: number | null;
    createDate: string | null;
    modifyDate: string | null;
   // roomCategory: RoomCategoryViewModel;
    roomStatus: RoomStatus;
}