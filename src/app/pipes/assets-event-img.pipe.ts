import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetsEventImg'
})
export class AssetsEventImgPipe implements PipeTransform {

  transform(value: string): string  {
    return "assets/eventsImages/"+value;
  }

}
