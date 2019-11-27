import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetsIconSvg'
})
export class AssetsIconSvgPipe implements PipeTransform {

  transform(value: string): string {
    return "assets/objectiveIconSvgs/"+value;
  }

}
