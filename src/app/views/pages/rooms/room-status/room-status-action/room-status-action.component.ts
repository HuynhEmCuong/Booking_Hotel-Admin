import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { cloneData } from 'src/app/core/common/helper';
import { RoomStatus } from 'src/app/core/models/rooms/room-status/room-status';
import { ShareService } from 'src/app/core/services/general/share.service';
import { RoomStatusService } from 'src/app/core/services/room/room-status.service';
import { UploadMultipleComponent } from 'src/app/views/commons/upload-multiple/upload-multiple.component';

@Component({
  selector: 'app-room-status-action',
  templateUrl: './room-status-action.component.html',
  styleUrls: ['./room-status-action.component.scss'],
})
export class RoomStatusActionComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('targetForm', { static: true }) targetForm: DxFormComponent;
  @ViewChild('uploadFile') uploadFiles: UploadMultipleComponent;
  isLoading: boolean;
  entity: RoomStatus = new RoomStatus();
  @Output() loadInit = new EventEmitter<void>();
  dataSourceStatus :any =[{
    id:1,
    name:'Hoạt động'
  },{
    id:2,
    name:'Ngưng hoạt động'
  },]
  constructor(
    private readonly roomStatus: RoomStatusService,
    private shareService: ShareService
  ) {}

  ngOnInit() {}

  fnSave() {
    let validation: any = this.targetForm.instance.validate();

    // Validation form devextrem
    this.shareService.validateDxForm(validation, (isValid) => {
      if (isValid) {
        this.isLoading = true;
        this.shareService.action(this.entity, this.roomStatus, () => {
          this.isLoading = false;
          this.childModal.hide();
          this.loadInit.emit();
        });
      }
    });
  }

  showChildModal(item) {
    if (item != null) {
      this.entity = cloneData(item);
      // this.uploadFiles.loadInitFile(this.entity.articleFile);
    } else {
      this.entity = new RoomStatus();
      let self = this;
      setTimeout(function () {
        self.targetForm.instance.resetValues();
      });
    }
    this.childModal.show();
  }
}
