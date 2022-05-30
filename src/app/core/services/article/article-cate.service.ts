import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArticleCategory } from '../../models/article/article-cate';
import { BaseService } from '../general/base.service';
import { AuthService } from '../system/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleCateService extends BaseService<ArticleCategory> {
  constructor(authService: AuthService, http: HttpClient, title: Title) {
    super(authService, http, 'ArticleCategory', title);
  }
}
