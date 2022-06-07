import { Room } from "../room/room";
import { RoomCateFile } from "./room-cate-file";

export class RoomCategory {
    id: number;
    name: string;
    code: string;
    description: string;
    price: number;
    size: number;
    imageList: string;
    urlImage: string;
    person: number;
    children: number;
    bedType: string;
    position: number;
    metaTile: string;
    metaKeyWord: string;
    metaDescription: string;
    createBy: number | null;
    modifyBy: number | null;
    createDate: string | null;
    modifyDate: string | null;
    rooms: Room;
    roomCateFile: RoomCateFile[];
}