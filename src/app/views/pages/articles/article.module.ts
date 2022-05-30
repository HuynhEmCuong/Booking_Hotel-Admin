import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ArticleCategoryActionComponent } from './article-category/article-category-action/article-category-action.component';
import { ArticleCategoryListComponent } from './article-category/article-category-list/article-category-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleActionComponent } from './article/article-action/article-action.component';
import { ArticleListComponent } from './article/article-list/article-list.component';

@NgModule({
  imports: [CommonModule, SharedModule, ArticleRoutingModule],
  declarations: [
    ArticleComponent,
    ArticleCategoryListComponent,
    ArticleCategoryActionComponent,
    ArticleActionComponent,
    ArticleListComponent
  ],
  providers: [],
})
export class ArticleModule {}
