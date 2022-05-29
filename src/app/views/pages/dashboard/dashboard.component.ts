import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentTaskReport } from 'src/app/core/models/task-request/request-task';
import { AlertifyService } from 'src/app/core/services/general/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  reportTask: StudentTaskReport;
  constructor(private _routeActive: ActivatedRoute , private _alertService:AlertifyService) {
   
  }

  ngOnInit() {

  }

}
