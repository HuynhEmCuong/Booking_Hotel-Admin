import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { cloneData } from 'src/app/core/common/helper';
import { RoomCategory } from 'src/app/core/models/rooms/room-cate/room-cate';
import { RoomStatus } from 'src/app/core/models/rooms/room-status/room-status';
import { Room } from 'src/app/core/models/rooms/room/room';
import { ShareService } from 'src/app/core/services/general/share.service';
import { RoomCateService } from 'src/app/core/services/room/room-cate.service';
import { RoomStatusService } from 'src/app/core/services/room/room-status.service';
import { RoomService } from 'src/app/core/services/room/room.service';

@Component({
  selector: 'app-room-action',
  templateUrl: './room-action.component.html',
  styleUrls: ['./room-action.component.scss'],
})
export class RoomActionComponent implements OnInit {
  entity: Room = new Room();
  roomCateList: RoomCategory[];
  roomStatusList :RoomStatus[];
  isLoading: boolean;
  dataSourceStatus: any = [
    {
      id: 1,
      name: 'Hoạt động',
    },
    {
      id: 2,
      name: 'Ngưng hoạt động',
    },
  ];
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('targetForm', { static: true }) targetForm: DxFormComponent;
  @Output() loadInit = new EventEmitter<void>();
  constructor(
    private readonly shareService: ShareService,
    private readonly roomService: RoomService,
    private readonly roomCateService: RoomCateService,
    private readonly roomStatusService:RoomStatusService
  ) {}

  ngOnInit() {
    this.getRoomCate();
    this.getRoomStatus();
  }

  getRoomCate() {
    this.roomCateService.getAll().subscribe((res) => {
      this.roomCateList = res;
    });
  }
  getRoomStatus() {
    this.roomStatusService.getAll().subscribe(res =>{
      this.roomStatusList = res;
    })
  }

  fnSave() {
    let validation: any = this.targetForm.instance.validate();

    // Validation form devextrem
    this.shareService.validateDxForm(validation, (isValid) => {
      if (isValid) {
        this.isLoading = true;
        this.shareService.action(this.entity, this.roomService, () => {
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
      this.entity = new Room();
      let self = this;
      setTimeout(function () {
        self.targetForm.instance.resetValues();
      });
    }
    this.childModal.show();
  }
}
