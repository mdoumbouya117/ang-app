import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) {return ''; }
  }

  private addSpace(value: string, index: number): string {
    if (value.length > index) {
        value = value.substring(0, index) + ' ' + value.substring(index);
    }

    return value;
  }
}
