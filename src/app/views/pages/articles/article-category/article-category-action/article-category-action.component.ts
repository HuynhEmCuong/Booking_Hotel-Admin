import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular/ui/form';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { cloneData } from 'src/app/core/common/helper';
import { ArticleCategory } from 'src/app/core/models/article/article-cate';
import { ArticleCateService } from 'src/app/core/services/article/article-cate.service';
import { ShareService } from 'src/app/core/services/general/share.service';

@Component({
  selector: 'app-article-category-action',
  templateUrl: './article-category-action.component.html',
  styleUrls: ['./article-category-action.component.css'],
})
export class ArticleCategoryActionComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('targetForm', { static: true }) targetForm: DxFormComponent;
  entity: ArticleCategory = new ArticleCategory() ;
  @Output() loadInit = new EventEmitter<void>();
  isLoading: boolean;
  constructor(
    private articleCate:ArticleCateService,
    private shareService: ShareService
  ) {}

  ngOnInit() {}

  fnSave() {
    let validation: any = this.targetForm.instance.validate();
    this.shareService.validateDxForm(validation, (isValid) => {
      if (isValid) {
        this.isLoading = true;
        this.shareService.action(this.entity, this.articleCate, () => {
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
      this.entity = new ArticleCategory();
      let self = this;
      setTimeout(function () {
        self.targetForm.instance.resetValues();
      });
    }
    this.childModal.show();
  }
}
