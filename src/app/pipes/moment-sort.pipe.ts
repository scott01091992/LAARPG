import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentSort'
})
export class MomentSortPipe implements PipeTransform {

  transform(cards: any[]): any[]{
      let cardsArr = cards;
      let counter = cardsArr.length;
      let newCardArr = [];
      for(let i = 0; i < counter; i++){
          if(cardsArr[i].completionDate != null){
              newCardArr.push(cards[i]);
          }
      }
      console.log(newCardArr);
      let swapElement = (array, indexA, indexB) => {
          let tmp = array[indexA];
          array[indexA] = array[indexB];
          array[indexB] = tmp;
      }
      for(let j = 0; j < newCardArr.length; j++){
          for(let k = 0; k < newCardArr.length-1; k++){
              console.log('j:'+j+' k:'+k);
              if(newCardArr[j].completionDate.isAfter(newCardArr[k].completionDate)){
                  swapElement(newCardArr, j, k);
                  j--;
                  break;
              }
          }
      }
      console.log(newCardArr);
    return newCardArr;
  }

}
