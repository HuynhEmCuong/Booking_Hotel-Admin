import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservationService } from 'src/app/core/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  @ViewChild("modalChild", { static: false }) modalChild;
  dataSource:any;
  dataPaymentSource:DataSourceTemplate[] = [
    {
      id:0,
      name:"Paypal"
    },
    {
      id:1,
      name:"Visal"
    },
    {
      id:2,
      name:"Momo"
    },
  ];
  dataReservationType : DataSourceTemplate[] = [
    {
    id:1,
    name:"Đang thanh toán"
  },
  {
    id:2,
    name:"Đã thanh toán"
  },
  {
    id:3,
    name:"Hủy"
  },
]


  constructor(private readonly _reservationService:ReservationService) { }

  ngOnInit() {
    this.dataSource= this._reservationService.loadDataGrid();
  }

  reloadGrid(){
    this.dataSource.reload();
  }

  showModal(e){
    this.modalChild.showChildModal(e.row.data);
  }


}

export class DataSourceTemplate {
  id:number ;
  name:string;
}
