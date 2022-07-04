import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strongestNum'
})
export class StrongestNumPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 10) {
      return value + '(Weak)'
    }
    else if (value >= 10 && value < 20) {
      return value + '(Strong)'
    }
    else {
      return value + '(Strongest)'
    }
  }

}
// You pass a value to the Pipe, the Pipe computes a new value and returns it.
//The name Pipe originates from the vertical bar “|” that sits between the value and the Pipe’s name. 
//{{ user.birthday | date }}
