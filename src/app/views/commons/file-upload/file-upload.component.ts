import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OperationFileResult } from 'src/app/core/models/system/opration-file-result';
import { AlertifyService } from 'src/app/core/services/general/alertify.service';
import { FileService } from 'src/app/core/services/system/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input('file-info') fileInfo: string;
  @Input('student-name') studentName: string;
  @Output() fileLocations = new EventEmitter<string>();

  url: string;
  files: FileInfor[] = [];
  processUpload: number = 0;

  constructor(private _sweetAlert: AlertifyService,
    private _fileService: FileService) { }

  ngOnInit() {
  }

  onSelect(event) {
    event.addedFiles.forEach((file: File) => {
      if (this.files.find((x: FileInfor) => x.file.name == file.name) == null) {
        let fileInfo = new FileInfor();
        fileInfo.file = file;
        fileInfo.send = false;
        this.files.push(fileInfo)
      }
      else {
        this._sweetAlert.warning(`File ${file.name} đã tồn tại`);
      }
    });
    this.uploadFile();
  }

  onRemove(event: FileInfor) {
    // this._sweetAlert.confirmCssTwoButton("Bạn có muốn xóa ", async () => {
    //   let result = await this._fileService.removeFile(event.fileLocation).then();
    //   if (result.Success) {
    //     this._sweetAlert.success("Hoàn Thành", "Xóa file thành công", 1000);
    //     this.files.splice(this.files.indexOf(event), 1);
    //     this.getUrl();
    //   }
    //   else {
    //     this._sweetAlert.error("Thất Bại", "Xóa không thành công");
    //   }
    // });
  }

  uploadFile() {
    let count = 0;
    const formData = new FormData();
    this.files.forEach((file) => {
      if (file.send == false) {
        formData.append("file", file.file);
        count++;
      }
    });

    if (count > 0) {
      // this._fileService.uploadFileMulti(formData, this.studentName).subscribe(
      //   (event) => {
      //     if (event.type === HttpEventType.UploadProgress) {
      //       this.processUpload = Math.round((100 * event.loaded) / event.total);
      //     } else if (event.type === HttpEventType.Response) {
      //       this.processUpload = 0;
      //       let response = event.body as OperationFileResult;
      //       console.log(response);
      //       this.mapDataFile(response);

      //     }
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      // )
    }
  }

  mapDataFile(response: OperationFileResult) {
    // response.FileResponses.forEach((item: FileResponse) => {
    //   let indexItem = this.files.findIndex(x => x.file.name == item.FileOriginalName);
    //   this.files[indexItem].send = true;
    //   this.files[indexItem].fileLocation = item.FileLocalName;
    //   this.files[indexItem].fileFullPath=item.FileFullPath;
    // })
    this.getUrl()
  }

  getUrl() {
    this.url = '';
    this.files.forEach(item => {
      this.url += item.fileFullPath + ";";
    })
    this.fileLocations.emit(this.url);
  }
}

export class FileInfor {
  file: File;
  send: boolean;
  fileLocation: string;
  fileFullPath:string
}
