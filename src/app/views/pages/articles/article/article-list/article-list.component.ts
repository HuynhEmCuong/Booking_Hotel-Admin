import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ArticleService } from 'src/app/core/services/article/article.service';
import { ShareService } from 'src/app/core/services/general/share.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @ViewChild("modalChild", { static: false }) modalChild;
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  dataSource:any;
  constructor(
    private readonly _articleSV:ArticleService,
    private readonly _shareService:ShareService
  ) {
    this.showModal = this.showModal.bind(this);
    this.fnDelete = this.fnDelete.bind(this);
   }

  ngOnInit() {
    this.dataSource= this._articleSV.loadDataGrid();
  }
  fnDelete(e){
    let id = e.row.data.id;
    this._shareService.deleteRowGrid(id,this._articleSV,()=>{
      this.dataSource.reload();
    })
  }

  showModal(e){
    this.modalChild.showChildModal(e.row.data);
  }

  reloadGrid(){
    this.dataSource.reload();
  }

  loadInit(){
    this.dataSource.reload();
  }

}
