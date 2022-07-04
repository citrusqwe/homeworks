import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'camelNotation'
})
export class CamelNotationPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('')
      .map((letter, i) => ((i + 1) % 2 === 0 && letter != '')
        ? letter
        : letter.toUpperCase()).join('');
  }

}
