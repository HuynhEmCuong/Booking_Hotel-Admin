import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../../models/article/article';
import { BaseService } from '../general/base.service';
import { AuthService } from '../system/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService<Article> {
  constructor(authService: AuthService, http: HttpClient, title: Title) {
    super(authService, http, 'Article', title);
  }
}