import { Component, OnInit } from '@angular/core';
import { AgendaService, DayService, EventSettingsModel, MonthAgendaService, MonthService, 
  TimelineMonthService, TimelineViewsService, View, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService,
     TimelineMonthService]
})
export class SchedularComponent implements OnInit {
  public setV:View = 'Month'
  
  public event:EventSettingsModel ={
    dataSource : [
      {
        Subject : "Sale on Shoes.",
        StartTime : new Date(2021,6,7,6),
        EndTime: new Date(2021,6,8,6)
      }
    ]
  }
  constructor() { }
  ngOnInit() {
  }

}
