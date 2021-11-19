import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneBrasileiro'
})
export class TelefoneBrasileiroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var finalTelephoneNumber = "";
    var number;
    var ddd;
    var ddi;
    var extra;
    value = value.trim();

    if (value == "") return "Inválido";
    if (!(/^\d+$/.test(value))) return "Inválido";

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
      } else if(value.length > 13){
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
