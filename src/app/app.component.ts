import {Component, OnInit} from '@angular/core';
import {CalendarService} from './calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private calendar: CalendarService) {
  }
  ngOnInit(): void{

  }
  getDays(): string[]{
    return this.calendar.getDays();
  }
}
