import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaAntiga'
})
export class PlacaAntigaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == "") return "Inválido"; 
    
    if (value == 'Inválido') {
      return value;
    } else {
      value = value.replace(" ", "").toUpperCase();
      var charsArray = value.split("");
      var isLettersRight = false;
      if (!Number(charsArray[0]) && !Number(charsArray[1]) && !Number(charsArray[2])) {
        isLettersRight = true;
      }

      var isNumbersRight = false;
      if ((Number(charsArray[3]) || charsArray[3]=="0") && (Number(charsArray[4]) || charsArray[4]=="0") && (Number(charsArray[5])  || charsArray[5]=="0") && (Number(charsArray[6]) || charsArray[6]=="0")) {
        isNumbersRight = true;
      }

      if (isLettersRight && isNumbersRight) {
        charsArray[2] = charsArray[2] + '-';
        return charsArray.join('');
      } else {
        return 'Inválido';
      }
    }
  }

}
