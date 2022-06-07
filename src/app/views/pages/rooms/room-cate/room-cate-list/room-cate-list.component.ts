import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ShareService } from 'src/app/core/services/general/share.service';
import { RoomCateService } from 'src/app/core/services/room/room-cate.service';

@Component({
  selector: 'app-room-cate-list',
  templateUrl: './room-cate-list.component.html',
  styleUrls: ['./room-cate-list.component.scss']
})
export class RoomCateListComponent implements OnInit {
  @ViewChild("modalChild", { static: false }) modalChild;
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  dataSource:any;
  constructor(private readonly _shareService:ShareService,
    private readonly _roomCate:RoomCateService) { 
    this.showModal = this.showModal.bind(this);
    this.fnDelete = this.fnDelete.bind(this);
  }

  ngOnInit() {
    this.dataSource = this._roomCate.loadDataGrid()
  }
  
  showModal(e){
    this.modalChild.showChildModal(e.row.data);
  }

  fnDelete(e){
    let id = e.row.data.id;
    this._shareService.deleteRowGrid(id,this._roomCate,()=>{
      this.dataSource.reload();
    })
  }

  reloadGrid(){
    this.dataSource.reload();
  }
}
