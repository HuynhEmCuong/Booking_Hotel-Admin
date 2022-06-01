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
import {
  OptionFileUpload,
  UploadMultipleComponent,
} from 'src/app/views/commons/upload-multiple/upload-multiple.component';

@Component({
  selector: 'app-article-action',
  templateUrl: './article-action.component.html',
  styleUrls: ['./article-action.component.css'],
})
export class ArticleActionComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('targetForm', { static: true }) targetForm: DxFormComponent;
  @ViewChild('uploadFile') uploadFiles: UploadMultipleComponent;
  entity: Article = new Article();
  @Output() loadInit = new EventEmitter<void>();
  isLoading: boolean;

  optionFile: OptionFileUpload = {
    IsUploadImage: false,
    pathFile: 'FileUpload/Articles',
    nameEntityId: '',
  };

  artilceCates: ArticleCategory[];
  constructor(
    private article: ArticleService,
    private shareService: ShareService,
    private articleCate: ArticleCateService
  ) {}

  ngOnInit() {
    this.articleCate.getAll().subscribe((res) => {
      this.artilceCates = res;
    });
  }
  fnSave() {
    let validation: any = this.targetForm.instance.validate();

    // Validation form devextrem
    this.shareService.validateDxForm(validation, (isValid) => {
      if (isValid) {
        this.uploadFiles.uploadFiles((responFile) => {
          
          let urlAllFile :string ="";
          if(responFile.length >0){
            responFile.map(item =>{
              urlAllFile= urlAllFile.concat(urlAllFile ?";":"",item.File.FileFullPath);
            })
            //Lưu tất cả đường dẫn ảnh vào 1 chuỗi cắt nhau bởi dấu ';'
            this.entity.imagesUrl = urlAllFile;
          }
        

          this.isLoading = true;
          this.shareService.action(this.entity, this.article, () => {
            this.isLoading = false;
            this.childModal.hide();
            this.loadInit.emit();
          });
        });
      }
    });
  }

  showChildModal(item) {
    if (item != null) {
      this.entity = cloneData(item);
      this.uploadFiles.loadInitFile(this.entity.imagesUrl.split(';'));
    } else {
      this.entity = new Article();
      let self = this;
      setTimeout(function () {
        self.targetForm.instance.resetValues();
      });
    }
    this.childModal.show();
  }

  

  valueChangeImageCrop($event) {}
}
