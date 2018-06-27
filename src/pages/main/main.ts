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
import { Storage } from '@ionic/storage';


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
  outputText = "";
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
  showR:boolean = false;
  recordSize = 0;
  todaslasLetras:Array<string>;

  constructor(
    public navParams: NavParams,
    public plugboard: PlugboardProvider,
    public reflector: ReflectorProvider,
    public popoverCtrl: PopoverController,
    public wirings: WiringsProvider,
    public clipboard: Clipboard,
    private socialSharing: SocialSharing,
    public toastCtrl: ToastController,
    public storage: Storage
    )
  { 
    this.positions= [' ', ' ', ' '];

    this.abcStatic 
    = [
      " ","!","\"","#","$","%","&","'","(",")","*","+",
      ",","-",".","/","0","1","2","3","4","5","6","7",
      "8","9",":",";","<","=",">","?","@","A","B","C",
      "D","E","F","G","H","I","J","K","L","M","N","O",
      "P","Q","R","S","T","U","V","W","X","Y","Z","[",
      "\\","]","^","_","`","a","b","c","d","e","f","g",
      "h","i","j","k","l","m","n","o","p","q","r","s",
      "t","u","v","w","x","y","z","{","|","}","~","",
      "","","","","","","","","","",
      "","","","","","","","","","",
      "","","","","","","","","","",
      "",""," ","¡","¢","£","¤","¥","¦","§","¨","©",
      "ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶",
      "·","¸","¹","º","»","¼","½","¾","¿","À","Á","Â","Ã",
      "Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð",
      "Ñ","Ò","Ó","Ô","Õ","Ö","×","Ø","Ù","Ú","Û","Ü","Ý",
      "Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê",
      "ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","÷",
      "ø","ù","ú","û","ü","ý","þ","ÿ"
    ];
  }

  ionViewWillEnter() {
    this.storage.get('routersSelected')
    .then((val) => {
      this.positions[0] = val[0];
      this.positions[1] = val[1];
      this.positions[2] = val[2]; 
    });

    this.storage.get('wiringsSelected')
    .then((val) => {
      this.routers[0].setReg(this.wirings.get(val[0]));
      this.routers[1].setReg(this.wirings.get(val[1]));
      this.routers[2].setReg(this.wirings.get(val[2])); 
    });
  }

  read()
  {
    this.outputText = "";
    for (var i = 0; i < this.inputText.length; i++)
      this.outputText = this.outputText.concat(this.encrypt(this.inputText[i]));
    this.inputText = "";
  }

  autoRead(){
    if (this.inputText == "") {
      this.outputText =""
      this.recordSize = 0;
    }
    else if(this.inputText.length > this.recordSize)
    {
      this.outputText 
      = this.outputText.concat(this.encrypt(this.inputText.slice(-1)));
      this.recordSize = this.inputText.length;
    }
  }

  move(number) {
    this.storage.set('routersSelected', [
      this.positions[0],
      this.positions[1],
      this.positions[2]
    ]);
    this.routers[number].move(this.positions[number]);
  }

  restart(){
    this.positions[0] = this.routers[0].restart();
    this.positions[1] = this.routers[1].restart();
    this.positions[2] = this.routers[2].restart(); 
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

  copy(){
    this.clipboard.copy(this.outputText)
    .then(() => {
      const toast = this.toastCtrl.create({
        message: 'Copiado',
        duration: 3000
      });
      toast.present();
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
        this.socialSharing.share(this.outputText)
        .then(() => {
          const toast = this.toastCtrl.create({
            message: 'Compartido',
            duration: 3000
          });
          toast.present();
        }).catch(() => {
          const toast = this.toastCtrl.create({
            message: 'Error al compartir',
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
