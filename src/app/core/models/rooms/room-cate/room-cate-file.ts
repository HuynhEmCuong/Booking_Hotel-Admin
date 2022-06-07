import { FileData } from "../../system/fileData";
import { RoomCategory } from "./room-cate";

export interface RoomCateFile {
    id: number;
    roomCateId: number;
    fileDataId: number;
    roomCategory: RoomCategory;
    file: FileData;
}