import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareService } from 'src/app/core/services/general/share.service';
import { RoomStatusService } from 'src/app/core/services/room/room-status.service';

@Component({
  selector: 'app-room-status-list',
  templateUrl: './room-status-list.component.html',
  styleUrls: ['./room-status-list.component.scss']
})
export class RoomStatusListComponent implements OnInit {
  dataSource:any;
  dataSourceStatus :any =[{
    id:1,
    name:'Hoạt động'
  },{
    id:2,
    name:'Ngưng hoạt động'
  },]
  @ViewChild("modalChild", { static: false }) modalChild;
  constructor(private readonly roomStatus:RoomStatusService,
    private readonly _shareService:ShareService) {
    this.showModal = this.showModal.bind(this);
    this.fnDelete = this.fnDelete.bind(this);
   }

  ngOnInit() {
    this.dataSource= this.roomStatus.loadDataGrid();
  }


  reloadGrid(){
    this.dataSource.reload();
  }

  fnDelete(e){
    let id = e.row.data.id;
    this._shareService.deleteRowGrid(id,this.roomStatus,()=>{
      this.dataSource.reload();
    })
  }

  showModal(e){
    this.modalChild.showChildModal(e.row.data);
  }


}
