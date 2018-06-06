import { Injectable } from '@angular/core';

/*
  Generated class for the RoutersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutersProvider {

	position: number;
	signalOut: boolean;
	abc: Array<string>;
	regSelect: Array<string>;
	regInput: Array<string>;
	abcStatic: Array<string>;

  constructor()
  {
  	this.position = 0;
    this.signalOut = false;

    this.abc = [
      ' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
      '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
      '@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
      'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
      '`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
      'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL'
    ];

    this.abcStatic = this.abc;
  }

  setReg(regSelect){
  	this.regSelect = regSelect;
    this.regInput =  regSelect;
  }

	encryptInside(input,signal){

    //reset signalOut 
    this.signalOut=false;

    //Si el numero de router es igual a 0 itera, de lo contrario iterta solo si la señal es verdadera
    if(signal === true){

      //Colocamos el primer elemento de un arreglo en la ultima posicion
      this.abc.push(this.abc.shift());
      this.regInput.push(this.regInput.shift());

      //Aumentamos la posicion a posicion + 1
      this.position+=1;

      //Verificamos si hemos girado mas de 25 veces, ponemos la posicion en 0 y enviamos una senal
      if (this.position > 25) {
        this.signalOut=true;
        this.position=0;
      }
    }

    var inputNumber = (input.charCodeAt(0) - " ".charCodeAt(0));

    /*  1) this.abc[inputNumber]  Representa la Variable de entrada dentro del router
        2) this.abc.indexOf(1) Devuelve el numero de la posicion de la (1) en abc
        3) this.regInput[this.regInput.indexOf(2)] Retorna la letra que esta en la posicion de (2) dentro de regInput
    */
    //Proceso de encriptacion:
    var encrypt = this.regInput[this.abc.indexOf(this.abc[inputNumber])];

    // Representa la salida de encrypt en el abcedario estatico
    var out = this.abcStatic[this.abc.indexOf(encrypt)];
    
    //Objento de retorno
    var jsonOut = {
      abcCurrent : this.abc, //Contiene la posicion actual del abecedario
      signalOut: this.signalOut, //Senal que le indica al siguiente router si iterar o no
      out: out //Contiene la letra de salida
    };

    //Retorno
    return jsonOut;
  };

  encryptOutside(input)
  {
    var inputNumber = (input.charCodeAt() - " ".charCodeAt(0));

    //Proceso de encriptacion:
    var encrypt = this.abc[this.regInput.indexOf(this.abc[inputNumber])];

    // Representa la salida de encrypt en el abcedario estatico
    return this.abcStatic[this.abc.indexOf(encrypt)];
  };


  restart = function()
  {
    this.regInput= this.regSelect;  
    this.position= 0;

    this.abc = [
      ' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
      '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
      '@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
      'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
      '`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
      'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL'
    ];

    return this.abc[0];
  };

  move(newposition)
  {
    this.position = newposition.charCodeAt() - " ".charCodeAt(0);
    this.regInput= this.regSelect; 

    this.abc = [
      ' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
      '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
      '@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
      'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
      '`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
      'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL'
    ];
  
    //Colocamos el router en la posicion definida por el usuario
    for (var i = 0; i < this.position; i++) {
      this.abc.push(this.abc.shift());
      this.regInput.push(this.regInput.shift());
    }

    return this.abc[0];
  };

}
