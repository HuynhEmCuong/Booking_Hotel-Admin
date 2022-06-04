export interface FileData{
    id: number;
    fileFullPath: string;
    fileOriginalName: string;
    fileLocalName: string;
    fileExtension: string;
    fileType: string;
    path: string;
    position: number | null;
    isImage: boolean;
    createDate: string | null;
    modifyDate: string | null;
    createBy: number | null;
    modifyBy: number | null;
}