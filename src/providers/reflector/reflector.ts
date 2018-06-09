import { Injectable } from '@angular/core';

/*
  Generated class for the ReflectorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReflectorProvider {

	registry:Array<string>;

  constructor()
  {
    this.registry= [
      'E','K','M','F',
      'A','D','G','Q',
      'V','Z','B','T',
      'C','W','Y','X',
      'H','U','S','L',
      'R','I','N','P',
      'O','J'
    ];
  }
  
  transf(letter)
  {
    let letterPosition = letter.charCodeAt() - "A".charCodeAt(0);
    return this.registry[letterPosition];
  }
}
