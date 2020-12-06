import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'ordinalDate'
})
export class OrdinalDatePipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ] as const;
    const valueDate = new Date(value);
    const ordinalMonth = months[valueDate.getMonth()];
    const ordinalDate = `${valueDate.getDate()}${this.nth(valueDate.getDate())}`;
    const ordinalYear = valueDate.getFullYear();
    const ordinalHours = valueDate.getHours();
    const ordinalMinutes = valueDate.getMinutes();


    return `${ordinalMonth} ${ordinalDate} ${ordinalYear}, ${ordinalHours}:${ordinalMinutes}`;
  }

  nth(d: number) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }
}

@NgModule({
  declarations: [
    OrdinalDatePipe
  ],
  exports: [
    OrdinalDatePipe,
  ],
  imports: [
    CommonModule,
  ]
})
export class OrdinalPipeModule { }

