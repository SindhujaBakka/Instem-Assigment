import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondstoHours'
})
export class SecondstoHoursPipe implements PipeTransform {

  transform(value: number): string {
    const totalMs = value * 1000;
    const result = new Date(totalMs).toISOString().slice(11, 19);
    return result;
  }

}
