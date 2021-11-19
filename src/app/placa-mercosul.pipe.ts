import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaMercosul'
})
export class PlacaMercosulPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == "") return "Inválido"; 
    
    if (value == 'Inválido') {
      return value;
    } else {
      value = value.replace(" ", "").toUpperCase();
      var charsArray = value.split("");
      var isfirstLettersRight = false;
      var isSingleLetterRight = false;
      var isSingleNumberRight = false;
      var isLastNumbersRight = false;
      
      if (!Number(charsArray[0]) && !Number(charsArray[1]) && !Number(charsArray[2])) {
        isfirstLettersRight = true;
      }

      if (Number(charsArray[3]) || charsArray[3]=="0") {
        isSingleNumberRight = true;
      }

      if (!Number(charsArray[4])) {
        isSingleLetterRight = true;
      }

      if ((Number(charsArray[5]) || charsArray[5]=="0") && (Number(charsArray[6]) || charsArray[6]=="0")) {
        isLastNumbersRight = true;
      }

      if (isfirstLettersRight && isSingleNumberRight && isSingleLetterRight && isLastNumbersRight) {
        charsArray[2] = charsArray[2] + '-';
        charsArray[3] = charsArray[3] + '-';
        charsArray[4] = charsArray[4] + '-';
        return charsArray.join('');
      } else {
        return 'Inválido';
      }
    }
  }

}
