import { PaymentType, ReservationStatus } from "../../enums/resevation";
import { Guest } from "../customer/customer";
import { Room } from "../rooms/room/room";

export interface Reservation {
    id: number;
    guestId: number;
    roomId: number;
    totalPrice: number;
    checkInDate: string;
    checkOutDate: string;
    paymentType: PaymentType;
    reservationStatus: ReservationStatus;
    createBy: number | null;
    modifyBy: number | null;
    createDate: string | null;
    modifyDate: string | null;
    guest: Guest;
    room: Room;
}