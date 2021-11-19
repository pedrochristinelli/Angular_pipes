import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeAbnt'
})
export class NomeAbntPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == "") return "Inválido"; 
    var abntName = "";
    var firstName;

    value = value.trim();
    if (value == 'Inválido') {
      return value;
    } else {
      var value_split = value.split(" ");
      if (value_split.length == 1) return "Inválido"; 
      abntName = value_split[value_split.length - 1].toUpperCase()
      firstName = value_split[0].split("");
      firstName.forEach(function (e : any, index:any) {
        if (index == 0) {
          firstName[index] = e.toUpperCase()
        } else {
          firstName[index] = e.toLowerCase()
        }
      })
      abntName = abntName + ", " + firstName.join("")
      value_split.pop();
      value_split.shift();

      value_split.forEach(function (e: any) {
        abntName = abntName + " " + e.substring(0, 1).toUpperCase() + "."
      })
      return abntName;
    }
  }
}
