import { Component } from '@angular/core';
import { IonicPage, NavParams, PopoverController } from 'ionic-angular';
import { PlugboardProvider } from '../../providers/plugboard/plugboard';
import { ReflectorProvider } from '../../providers/reflector/reflector';
import { WiringsProvider } from '../../providers/wirings/wirings';
import { RoutersProvider } from '../../providers/routers/routers';
import { TopPopoverPage } from '../top-popover/top-popover';
import { CardPopoverPage } from '../card-popover/card-popover';

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
  a:number;
  b:number;
  router1 = new RoutersProvider;
  router2 = new RoutersProvider;
  router3 = new RoutersProvider;
  realtime:boolean = false;

  constructor(
    public navParams: NavParams,
    public plugboard: PlugboardProvider,
    public reflector: ReflectorProvider,
    public popoverCtrl: PopoverController,
    public wirings: WiringsProvider
    )
  {
    this.router1.setReg(wirings.get(0));
    this.router2.setReg(wirings.get(1));
    this.router3.setReg(wirings.get(2));
    
    this.position1='A';
    this.position2='A';
    this.position3='A';
  }

  read()
  {
    let messageOutput="";
    for (var i = 0; i < this.inputText.length; i++)
      messageOutput = messageOutput.concat(this.encryptLetter(this.inputText[i]));
    this.outputText = messageOutput;
    this.inputText = "";
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

  topPopover(myEvent) {
    let popover = this.popoverCtrl.create(TopPopoverPage,{
      realtime: this.realtime
    });

    popover.onDidDismiss(data => {
      if(data != null) this.realtime = data;
    });

    popover.present({
      ev: myEvent
    });
  }


  cardPopover(myEvent) {
    let popover = this.popoverCtrl.create(CardPopoverPage);

    popover.present({
      ev: myEvent
    });
  }
}
