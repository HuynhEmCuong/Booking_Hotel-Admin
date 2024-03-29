import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/system/auth.service';
import { FileViewModel } from 'src/app/core/models/file/file';
import { HttpEventType } from '@angular/common/http';
import { AlertifyService } from 'src/app/core/services/general/alertify.service';
import { FileService } from 'src/app/core/services/system/file.service';
import { OperationFileResult } from 'src/app/core/models/system/opration-file-result';
import { blobToFile } from 'src/app/core/common/helper';

@Component({
  selector: 'upload-multiple',
  templateUrl: './upload-multiple.component.html',
  styleUrls: ['./upload-multiple.component.css'],
})
export class UploadMultipleComponent implements OnInit {
  @Input('options') options: OptionFileUpload = new OptionFileUpload();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  //file upload
  filesCheck: Array<FileCheck> = new Array<FileCheck>();

  filesInput: any = [];
  processUpload: number = 0;
  constructor(
    private authService: AuthService,
    private fileService: FileService,
    private alertService: AlertifyService
  ) {}

  ngOnInit() {}

  loadInitFile(filesInputs = null) {
    this.filesInput = filesInputs;
    this.filesCheck = [];
    this.processUpload = 0;
    if (this.filesInput?.length > 0) {
      this.filesInput.forEach(async (file) => {
        if (file.fileData != null) {
          const fileData = file.fileData;
          let blob = await this.fileService
            .downloadFile(fileData.fileFullPath)
            .toPromise()
            .then();
          let fileCheck = new FileCheck();
          fileCheck.IsNew = false;
          fileCheck.FileLocalName = fileData.fileLocalName;
          fileCheck.FileOriginalName = fileData.fileOriginalName;
          fileCheck.File = blobToFile(blob, fileData.fileOriginalName);
          this.filesCheck.push(fileCheck);
        }
      });
    }
  }


  //Truyền vào 1 mảng string lưu đường dẫn hình
  loadInitFileWithUrls(filesInputs: string[] = []) {
    filesInputs.forEach(async (urlFulPath) => {
      if (urlFulPath) {
        debugger
        let blod = this.fileService.downloadFile(urlFulPath).toPromise().then();
        // let fileChek = new FileCheck();
        // fileChek.File = blobToFile();
      }
    });
  }

  onSelect(event) {
    event.addedFiles.forEach((file) => {
      if (this.filesCheck.find((x) => x.File.name == file.name) == null) {
        let fileCheck = new FileCheck();
        fileCheck.IsNew = true;
        fileCheck.File = file;
        this.filesCheck.push(fileCheck);
      } else {
        this.alertService.warning(
          file.name + ' đã tồn tại!Vui lòng chọn file khác!'
        );
      }
    });
  }

  async onRemove(event) {
    if (event.IsNew) {
      this.filesCheck = this.filesCheck.filter(
        (x) => x.File.name != event.File.name
      );
    } else {
      //Hỏi nếu xóa file đã lưu vào hệ thống
      this.alertService.confirmDeleteFile(async () => {
        let res: any = await this.fileService
          .removeFile(event.FileLocalName)
          .toPromise()
          .then();
        if (res.success) {
          debugger
          this.filesCheck = this.filesCheck.filter(
            (x) => x.FileLocalName != event.FileLocalName
          );
          this.alertService.success('Xóa thành công!');
        }
      });
    }
  }

  uploadFiles(callBack) {
    var formData = new FormData();
    this.filesCheck
      .filter((x) => x.IsNew == true)
      .forEach((file) => {
        formData.append('files', file.File, file.File.name);
      });

    this.fileService.uploadFile(formData, this.options.pathFile).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.processUpload = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          //Khi upload thành công
          this.processUpload = 0;
          let response = event.body as OperationFileResult;
          let dataMapingFiles = this.mapFiles(response);
          callBack(dataMapingFiles);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  mapFiles(response: OperationFileResult) {
    let listCustomerFile = new Array<any>();
    if (response.fileResponses.length > 0) {
      response.fileResponses.forEach((fileResponse) => {
        let customFile: any = {};
        customFile['Id'] = 0;
        customFile['FileId'] = 0;
        customFile[this.options.nameEntityId] = 0;

        let file = new FileViewModel();
        file.FileFullPath = fileResponse.fileFullPath;
        file.FileLocalName = fileResponse.fileLocalName;
        file.FileOriginalName = fileResponse.fileOriginalName;
        file.FileExtension = fileResponse.fileExtension;
        file.FileType = fileResponse.fileType;
        file.IsImage = fileResponse.isImage;
        file.Path = fileResponse.path;
        file.Position = fileResponse.position;

        customFile['File'] = file;
        listCustomerFile.push(customFile);
      });
    }
    return listCustomerFile;
  }

  dowloadFile(file) {
    var url = window.URL.createObjectURL(file);
    var a;
    a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
    setTimeout(function () {
      return window.URL.revokeObjectURL(url);
    }, 1000);
  }
}

export class OptionFileUpload {
  pathFile: string = 'uploadFiles/Commons';
  IsUploadImage: boolean = false;
  nameEntityId: string = '';
}

export class FileCheck {
  IsNew: boolean;
  FileLocalName: string;
  FileOriginalName: string;
  File: File;
}
