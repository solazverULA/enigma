import { Component } from '@angular/core';
import { IonicPage, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { PlugboardProvider } from '../../providers/plugboard/plugboard';
import { ReflectorProvider } from '../../providers/reflector/reflector';
import { WiringsProvider } from '../../providers/wirings/wirings';
import { RoutersProvider } from '../../providers/routers/routers';
import { TopPopoverPage } from '../top-popover/top-popover';
import { CardPopoverPage } from '../card-popover/card-popover';
import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';


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
  positions:Array<string>;
  abcStatic:Array<string>;
  a:number;
  b:number;
  routers = [
    new RoutersProvider,
    new RoutersProvider,
    new RoutersProvider
  ];
  realtime:boolean = false;

  constructor(
    public navParams: NavParams,
    public plugboard: PlugboardProvider,
    public reflector: ReflectorProvider,
    public popoverCtrl: PopoverController,
    public wirings: WiringsProvider,
    public clipboard: Clipboard,
    private socialSharing: SocialSharing,
    public toastCtrl: ToastController
    )
  {
    this.routers[0].setReg(wirings.get(0));
    this.routers[1].setReg(wirings.get(1));
    this.routers[2].setReg(wirings.get(2));
    
    this.positions= ['A', 'A', 'A'];

    this.abcStatic=[
      'A','B','C','D',
      'E','F','G','H',
      'I','J','K','L',
      'M','N','O','P',
      'Q','R','S','T',
      'U','V','W','X',
      'Y','Z'
    ];
  }

  read()
  {
    this.outputText = "";
    for (var i = 0; i < this.inputText.length; i++)
      this.outputText = this.outputText.concat(this.encrypt(this.inputText[i]));
    this.inputText = "";
  }

  move(number) {
    this.routers[number].move(this.positions[number]);
  }

  encrypt(letter)
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

    output = this.routers[0].encryptInside(letter,true);
    this.positions[0] = output.abcCurrent[0];
    letter = output.out;
    signal = output.signalOut;
   
    output = this.routers[1].encryptInside(letter,signal);
    this.positions[1] = output.abcCurrent[0];
    letter = output.out;
    signal = output.signalOut;
   
    output = this.routers[2].encryptInside(letter,signal);
    this.positions[2] = output.abcCurrent[0];
    letter = output.out;

    return letter;
  }


  outside(letter)
  {
    let output;
    output = this.routers[2].encryptOutside(letter);
    letter = output;
    output = this.routers[1].encryptOutside(letter);
    letter = output;    
    output = this.routers[0].encryptOutside(letter);
    letter = output;

    return letter;
  }

  topPopover(myEvent) 
  {
    let popover = this.popoverCtrl.create(TopPopoverPage,{
      realtime: this.realtime
    });

    popover.onDidDismiss(data => 
    {
      if(data != null) this.realtime = data;
    });

    popover.present({
      ev: myEvent
    });
  }


  cardPopover(myEvent) 
  {
    let popover = this.popoverCtrl.create(CardPopoverPage);

    popover.onDidDismiss(data => 
    {
      if(data === 0)
      {
        this.inputText = "";
        this.outputText = "";
        this.move(0)
        this.move(1)
        this.move(2)
      }      

      if(data === 1)
      {
        this.socialSharing.shareViaEmail(this.outputText)
        .then(() => {
          const toast = this.toastCtrl.create({
            message: 'copiado',
            duration: 3000
          });
          toast.present();
        }).catch(() => {
          const toast = this.toastCtrl.create({
            message: 'error al copiar',
            duration: 3000
          });
          toast.present();
        });
      };
    });

    popover.present({
      ev: myEvent
    });
  }
}
