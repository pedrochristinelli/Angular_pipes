import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneAmericano'
})
export class TelefoneAmericanoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var finalTelephoneNumber = "";
    var number;
    var ddd;
    var ddi;
    var extra;
    var finalTelephoneNumber = "";
    value = value.trim();

    if (value == "") return "Inválido";
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) return "Inválido";
    // Regex pego em https://stackoverflow.com/questions/32311081/check-for-special-characters-in-string

    var keyboard = ['', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var value_split = value.split("");
    var convertedNumber = "";
    value_split.forEach(function (num: any) {
      if (num == "0" || Number(num)) {
        convertedNumber = convertedNumber + num;
      } else {
        keyboard.forEach(function (tecla, index) {
          if (tecla.includes(num)) {
            convertedNumber = convertedNumber + (index + 1)
          }
        })
      }
    })

    value = convertedNumber;
  
    if (value.length >= 8) {
      if(value.length == 8){
        number = value.substring(value.length - 8, value.length).split(/(.{4})/).filter((O: any) => O);
        finalTelephoneNumber = number[0] + "-" + number[1];
      } else if(value.length == 9){
        number = value.substring(value.length - 8, value.length).split(/(.{4})/).filter((O: any) => O);
        finalTelephoneNumber = number[0] + "-" + number[1];
        extra = value.substring(value.length - 9, value.length - 8);
        finalTelephoneNumber = extra + " " + finalTelephoneNumber;
      } else if (value.length == 10) {
        number = value.substring(value.length - 8, value.length).split(/(.{4})/).filter((O: any) => O);
        finalTelephoneNumber = number[0] + "-" + number[1];
        ddd = value.substring(value.length - 10, value.length - 8);
        finalTelephoneNumber = "(" + ddd + ") " + finalTelephoneNumber;
      } else if (value.length == 11) {
        number = value.substring(value.length - 8, value.length).split(/(.{4})/).filter((O: any) => O);
        finalTelephoneNumber = number[0] + "-" + number[1];
        extra = value.substring(value.length - 9, value.length - 8);
        finalTelephoneNumber = extra + " " + finalTelephoneNumber;
        ddd = value.substring(value.length - 11, value.length - 9);
        finalTelephoneNumber = "(" + ddd + ") " + finalTelephoneNumber;
      } else if (value.length == 12) {
        number = value.substring(value.length - 8, value.length).split(/(.{4})/).filter((O: any) => O);
        finalTelephoneNumber = number[0] + "-" + number[1];
        ddd = value.substring(value.length - 10, value.length - 8);
        finalTelephoneNumber = "(" + ddd + ") " + finalTelephoneNumber;
        ddi = value.substring(value.length - 12, value.length - 10);
        finalTelephoneNumber = "+" + ddi + " " + finalTelephoneNumber;
      } else if (value.length == 13) {
        number = value.substring(value.length - 8, value.length).split(/(.{4})/).filter((O: any) => O);
        finalTelephoneNumber = number[0] + "-" + number[1];
        extra = value.substring(value.length - 9, value.length - 8);
        finalTelephoneNumber = extra + " " + finalTelephoneNumber;
        ddd = value.substring(value.length - 11, value.length - 9);
        finalTelephoneNumber = "(" + ddd + ") " + finalTelephoneNumber;
        ddi = value.substring(value.length - 13, value.length - 11);
        finalTelephoneNumber = "+" + ddi + " " + finalTelephoneNumber;
      } else if (value.length > 13) {
        finalTelephoneNumber = "Inválido";
      }
    } else {
      finalTelephoneNumber = "Inválido";
    }

    console.log("DDI", ddi);
    console.log("DDD", ddd);
    console.log("extra", extra);
    console.log("number", number);
    return finalTelephoneNumber;
  }

}
