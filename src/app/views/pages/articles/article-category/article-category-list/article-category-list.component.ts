import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ArticleCateService } from 'src/app/core/services/article/article-cate.service';
import { ShareService } from 'src/app/core/services/general/share.service';

@Component({
  selector: 'app-article-category-list',
  templateUrl: './article-category-list.component.html',
  styleUrls: ['./article-category-list.component.css']
})
export class ArticleCategoryListComponent implements OnInit {
  @ViewChild("modalChild", { static: false }) modalChild;
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  dataSource:any;
  constructor(
    private readonly _articleCateSV:ArticleCateService,
    private readonly _shareService:ShareService
  ) {
    this.showModal = this.showModal.bind(this);
    this.fnDelete = this.fnDelete.bind(this);
   }

  ngOnInit() {
    this.dataSource= this._articleCateSV.loadDataGrid();
  }
  fnDelete(e){
    let id = e.row.data.id;
    this._shareService.deleteRowGrid(id,this._articleCateSV,()=>{
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
