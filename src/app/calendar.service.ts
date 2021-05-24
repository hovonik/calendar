import {Injectable} from '@angular/core';

@Injectable()
export class CalendarService {
  date = new Date();
  currentMonth = this.date.getMonth();
  currentDay = this.date.getDate();
  currentYear = this.date.getFullYear();
  checkedYear = this.date.getFullYear();
  checkedMonth = this.currentMonth;
  days = [];
  constructor() {
  }

  getDays(): string[] {
    this.days = [];
    for (let i = 1; i <= this.lastDay(this.date.getFullYear(), this.date.getMonth()); i++) {
      this.days.push('' + i);
    }
    const changeDayPosition = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    for(let i = 0; i < changeDayPosition.getDay(); i++){
      this.days.unshift('');
    }
    const daysLength = 7 - (this.days.length % 7);
    if(this.days.length % 7 !== 0){
      for(let j = 0; j < daysLength; j++){
        this.days.push('');
      }
    }
    return this.days;
  }
  lastDay(year, month): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
