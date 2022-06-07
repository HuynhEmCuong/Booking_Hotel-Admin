import { Status } from "src/app/core/enums/status.enum";

export class RoomStatus {
    id: number;
    name: string;
    code: number;
    description: string;
    status: Status;
    position: number;
    createBy: number | null;
    modifyBy: number | null;
    createDate: string | null;
    modifyDate: string | null;
}