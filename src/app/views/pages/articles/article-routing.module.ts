import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCategoryListComponent } from './article-category/article-category-list/article-category-list.component';
import { ArticleListComponent } from './article/article-list/article-list.component';

const routes: Routes = [
  {
    path: 'list-cate',
    component: ArticleCategoryListComponent,
  },
  {
    path: 'list',
    component: ArticleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
