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
    this.registry = [
      '`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
      ' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
      '@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
      '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
      'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL',
      'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_'
    ];
  }
  
  transf(letter)
  {
    let letterPosition = letter.charCodeAt() - " ".charCodeAt(0);
    return this.registry[letterPosition];
  }
}
