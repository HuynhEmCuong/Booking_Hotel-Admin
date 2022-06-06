import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-status-list',
  templateUrl: './room-status-list.component.html',
  styleUrls: ['./room-status-list.component.scss']
})
export class RoomStatusListComponent implements OnInit {
  dataSource:any
  constructor() { }

  ngOnInit() {
  }

  reloadGrid(){

  }

  fnDelete(e){
    // let id = e.row.data.id;
    // this._shareService.deleteRowGrid(id,this._articleSV,()=>{
    //   this.dataSource.reload();
    // })
  }

  showModal(e){
    // this.modalChild.showChildModal(e.row.data);
  }


}
