import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})
export class CalendarHeaderComponent implements OnInit {
  selectedMonth = this.calendar.checkedMonth;
  constructor(private calendar: CalendarService) { }
  ngOnInit(): void {
  }
  getDate(months = this.calendar.checkedMonth): Date{
    this.calendar.date.setMonth(months);
    this.selectedMonth = months;
    this.calendar.checkedYear = this.calendar.date.getFullYear();
    return new Date(this.calendar.date);
  }
  changeMonth(checkedMonth: number): void{
    this.calendar.checkedMonth = checkedMonth;
    this.getDate(this.calendar.checkedMonth);
    if(checkedMonth < 0){
      this.calendar.checkedMonth = 11;
    }else if(checkedMonth > 11){
      this.calendar.checkedMonth = 0;
    }
  }
}
