import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { cloneData } from 'src/app/core/common/helper';
import { Article } from 'src/app/core/models/article/article';
import { ArticleCategory } from 'src/app/core/models/article/article-cate';
import { ArticleCateService } from 'src/app/core/services/article/article-cate.service';
import { ArticleService } from 'src/app/core/services/article/article.service';
import { ShareService } from 'src/app/core/services/general/share.service';

@Component({
  selector: 'app-article-action',
  templateUrl: './article-action.component.html',
  styleUrls: ['./article-action.component.css'],
})
export class ArticleActionComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('targetForm', { static: true }) targetForm: DxFormComponent;
  entity: Article = new Article();
  @Output() loadInit = new EventEmitter<void>();
  isLoading: boolean;

  artilceCates :ArticleCategory[];
  constructor(
    private article: ArticleService,
    private shareService: ShareService,
    private articleCate:ArticleCateService,
  ) {}

  ngOnInit() {
    this.articleCate.getAll().subscribe(res =>{
      this.artilceCates =res;
    })
  }

  fnSave() {
    let validation: any = this.targetForm.instance.validate();
    this.shareService.validateDxForm(validation, (isValid) => {
      if (isValid) {
        this.isLoading = true;
        this.shareService.action(this.entity, this.article, () => {
          this.isLoading = false;
          this.childModal.hide();
          this.loadInit.emit();
        });
      }
    });
  }

  showChildModal(item) {
    if (item != null) {
      this.entity = cloneData(item);
    } else {
      this.entity = new Article();
      let self = this;
      setTimeout(function () {
        self.targetForm.instance.resetValues();
      });
    }
    this.childModal.show();
  }

  valueChangeImageCrop($event){
    
  }
}
