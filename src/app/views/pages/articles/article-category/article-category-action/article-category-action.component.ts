import { Component, OnInit } from '@angular/core';
import { ArticleCategory } from 'src/app/core/models/article/article-cate';

@Component({
  selector: 'app-article-category-action',
  templateUrl: './article-category-action.component.html',
  styleUrls: ['./article-category-action.component.css'],
})
export class ArticleCategoryActionComponent implements OnInit {
  entity: ArticleCategory;
  isLoading: boolean;
  constructor() {}

  ngOnInit() {}

  fnSave() {}
}
