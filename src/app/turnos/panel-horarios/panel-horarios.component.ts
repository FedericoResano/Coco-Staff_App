import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-horarios',
  templateUrl: './panel-horarios.component.html',
  styleUrls: ['./panel-horarios.component.css']
})
export class PanelHorariosComponent implements OnInit {

  @Input() unavailableDates: Date[] = []; // Fechas no disponibles
  @Input() availableTimes: string[] = []; // Horarios disponibles

  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  selectedDate: Date | null = null;

  daysInMonth: Date[] = [];

  ngOnInit() {
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  generateCalendar(month: number, year: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    this.daysInMonth = [];
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      this.daysInMonth.push(date);
    }
  }

  isUnavailable(date: Date): boolean {
    return this.unavailableDates.some(d =>
      d.getFullYear() === date.getFullYear() &&
      d.getMonth() === date.getMonth() &&
      d.getDate() === date.getDate()
    );
  }

  selectDate(date: Date) {
    if (!this.isUnavailable(date)) {
      this.selectedDate = date;
    }
  }

}