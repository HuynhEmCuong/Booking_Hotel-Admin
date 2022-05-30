import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { UploadCropComponent } from '../../commons/upload-crop/upload-crop.component';
import { ArticleCategoryActionComponent } from './article-category/article-category-action/article-category-action.component';
import { ArticleCategoryListComponent } from './article-category/article-category-list/article-category-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleActionComponent } from './article/article-action/article-action.component';
import { ArticleListComponent } from './article/article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule, 
    ArticleRoutingModule,
    FormsModule,
    SharedModule,
    PaginationModule.forRoot()
   ],
  declarations: [
    ArticleComponent,
    ArticleCategoryListComponent,
    ArticleCategoryActionComponent,
    ArticleActionComponent,
    ArticleListComponent,
  ],
  providers: [],
})
export class ArticleModule {}
