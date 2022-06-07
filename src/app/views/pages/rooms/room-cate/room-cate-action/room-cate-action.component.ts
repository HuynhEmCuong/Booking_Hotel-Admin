import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { cloneData } from 'src/app/core/common/helper';
import { RoomCategory } from 'src/app/core/models/rooms/room-cate/room-cate';
import { ShareService } from 'src/app/core/services/general/share.service';
import { RoomCateService } from 'src/app/core/services/room/room-cate.service';
import { OptionFileUpload, UploadMultipleComponent } from 'src/app/views/commons/upload-multiple/upload-multiple.component';

@Component({
  selector: 'app-room-cate-action',
  templateUrl: './room-cate-action.component.html',
  styleUrls: ['./room-cate-action.component.scss']
})
export class RoomCateActionComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('targetForm', { static: true }) targetForm: DxFormComponent;
  @ViewChild('uploadFile') uploadFiles: UploadMultipleComponent;
  isLoading :boolean=false;
  entity:RoomCategory = new RoomCategory();
  @Output() loadInit = new EventEmitter<void>();
  optionFile: OptionFileUpload = {
    IsUploadImage: false,
    pathFile: 'FileUpload/RoomsCategory',
    nameEntityId: 'RoomCateId',
  };
  constructor(private readonly roomCate:RoomCateService,
    private readonly shareService:ShareService) { }

  ngOnInit() {
  }

  fnSave() {
    let validation: any = this.targetForm.instance.validate();
    

    // Validation form devextrem
    this.shareService.validateDxForm(validation, (isValid) => {
      if (isValid) {
        this.uploadFiles.uploadFiles((responFile) => {
          this.entity.roomCateFile = responFile;

          this.isLoading = true;
          this.shareService.action(this.entity, this.roomCate, () => {
            this.isLoading = false;
            this.childModal.hide();
            this.loadInit.emit();
          });
        });
      }
    });
  }

  showChildModal(item) {
    debugger
    if (item != null) {
      this.entity = cloneData(item);
      this.uploadFiles.loadInitFile(this.entity.roomCateFile);
    } else {
      this.entity = new RoomCategory();
      let self = this;
      setTimeout(function () {
        self.targetForm.instance.resetValues();
      });
    }
    this.childModal.show();
  }

}
