import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFormat'
})
export class MomentFormatPipe implements PipeTransform {
  transform(value: any): any {
      if(value){
          return value.format("MMMM Do YYYY");
      }
  }
}
