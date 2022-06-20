import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Reservation } from 'src/app/core/models/resevation/resevation';

@Component({
  selector: 'app-reservation-action',
  templateUrl: './reservation-action.component.html',
  styleUrls: ['./reservation-action.component.css']
})
export class ReservationActionComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('targetForm', { static: true }) targetForm: DxFormComponent;
  entity: Reservation = new Reservation();
  isLoading :boolean ;

  constructor() { }

  ngOnInit() {
  }

  showChildModal(data:any){
    this.childModal.show();
  }

  fnSave(){}

}
