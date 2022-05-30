import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ArticleCategory } from 'src/app/core/models/article/article-cate';

@Component({
  selector: 'app-article-action',
  templateUrl: './article-action.component.html',
  styleUrls: ['./article-action.component.css']
})
export class ArticleActionComponent implements OnInit {
  @ViewChild("childModal", { static: false }) childModal: ModalDirective;
  @ViewChild("targetForm", { static: true }) targetForm: DxFormComponent;
  isLoading:boolean;
  entity:ArticleCategory = new ArticleCategory()
  constructor() { 
   
  }

  ngOnInit() {
  }

  fnSave(){

  }

}
