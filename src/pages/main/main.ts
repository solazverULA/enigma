import { Component } from '@angular/core';
import { IonicPage, NavParams, PopoverController } from 'ionic-angular';
import { PlugboardProvider } from '../../providers/plugboard/plugboard';
import { ReflectorProvider } from '../../providers/reflector/reflector';
import { RoutersProvider } from '../../providers/routers/routers';
import { PopoverPage } from '../popover/popover';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  inputText:string;
  outputText:string;
  position1:string;
  position2:string;
  position3:string;
  abcStatic:Array<string>;
  router1 = new RoutersProvider;
  router2 = new RoutersProvider;
  router3 = new RoutersProvider;
  realtime:boolean = false;

  constructor(
    public navParams: NavParams,
    public plugboard: PlugboardProvider,
    public reflector: ReflectorProvider,
    public popoverCtrl: PopoverController)
  {

    this.abcStatic = [
      ' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
      '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
      '@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
      'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
      '`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
      'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL'
    ];

    this.router1.setReg(this.abcStatic);
    this.router2.setReg(this.abcStatic);
    this.router3.setReg(this.abcStatic);
  }

  read()
  {
    let messageOutput="";
    for (var i = 0; i < this.inputText.length; i++)
      messageOutput = messageOutput.concat(this.encryptLetter(this.inputText[i]));
    this.outputText = messageOutput;
  }

  encryptLetter(letter)
  {
    letter = this.plugboard.transf(letter);
    letter = this.inside(letter);
    letter = this.reflector.transf(letter);
    letter = this.outside(letter);
    letter = this.plugboard.transf(letter);
    return letter;
  }

  inside(letter)
  {
    let signal;
    let output;

    output = this.router1.encryptInside(letter,true);
    this.position1 = output.abcCurrent[0];
    letter = output.out;
    signal = output.signalOut;
    output = this.router2.encryptInside(letter,signal);
    this.position2 = output.abcCurrent[0];
    letter = output.out;
    signal = output.signalOut;
    output = this.router3.encryptInside(letter,signal);
    this.position3 = output.abcCurrent[0];
    letter = output.out;

    return letter;
  }


  outside(letter)
  {
    let output;

    output = this.router3.encryptOutside(letter);
    letter = output;
    output = this.router2.encryptOutside(letter);
    letter = output;    
    output = this.router1.encryptOutside(letter);
    letter = output;

    return letter;
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
