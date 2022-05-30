import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-article-category-list',
  templateUrl: './article-category-list.component.html',
  styleUrls: ['./article-category-list.component.css']
})
export class ArticleCategoryListComponent implements OnInit {
  @ViewChild("modalChild", { static: false }) modalChild;
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  dataSource:any;
  constructor() { }

  ngOnInit() {
  }

  fnDelete(){

  }

  showModal(e){
    this.modalChild.showChildModal(e.row.data);
  }

  reloadGrid(){
    this.dataSource.reload();
  }

}
