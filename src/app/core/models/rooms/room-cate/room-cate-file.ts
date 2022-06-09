import { FileData } from "../../system/fileData";
import { RoomCategory } from "./room-cate";

export class RoomCateFile {
    id: number ;
    roomCateId: number;
    fileDataId: number;
    roomCategory: RoomCategory;
    file: FileData;
}