import { Injectable } from '@angular/core';

/*
  Generated class for the PlugboardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlugboardProvider {

	private registry:Array<string>;

  constructor()
  {
    this.registry = [
      ' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
      '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
      '@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
      'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
      '`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
      'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL'
    ];

  }

  transf(letter)
  {
    let letterPosition = letter.charCodeAt() - " ".charCodeAt(0);
    return this.registry[letterPosition];
  }

}