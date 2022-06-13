import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareService } from 'src/app/core/services/general/share.service';
import { RoomService } from 'src/app/core/services/room/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  dataSource: any;
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
  @ViewChild('modalChild', { static: false }) modalChild;
  constructor(
    private readonly _roomService: RoomService,
    private readonly _shareService: ShareService
  ) {
    this.showModal = this.showModal.bind(this);
    this.fnDelete = this.fnDelete.bind(this);
  }

  ngOnInit() {
    this.dataSource = this._roomService.loadDataGrid();
  }

  reloadGrid() {
    this.dataSource.reload();
  }

  fnDelete(e) {
    let id = e.row.data.id;
    this._shareService.deleteRowGrid(id,this._roomService,()=>{
      this.dataSource.reload();
    })
  }

  showModal(e) {
    this.modalChild.showChildModal(e.row.data);
  }
}
