export interface Guest {
    id: number;
    fullName: string;
    phone: string;
    email: string;
    createDate: string | null;
    modifyDate: string | null;
    createBy: number | null;
    modifyBy: number | null;
}