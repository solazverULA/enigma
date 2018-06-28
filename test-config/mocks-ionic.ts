import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { WiringsProvider } from '../src/providers/wirings/wirings';

import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ToastController } from 'ionic-angular';

export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class ClipboardMock extends Clipboard{

}
export class SocialSharingMock extends SocialSharing{

}
export class ToastControllerMock extends ToastController{

}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class IonicStorageMock extends IonicStorageModule {

    ready(){
      return true;
    } 

    set(){
      return;
    } 

    get(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }; 

    remove(){
      return;
    } 

    clear(){
      return;
    } 

    length(){
      return 1;
    } 
  }
}


export class WiringsMock extends WiringsProvider {
  getAll() : any{
    return [
        ["%","","*","|","×","","ã","¦","G","/","¿","F","ì","t","=","q","¸",">","N","","u","^","Ê","3","m","Õ","õ","ë","ê","M","","8","À","","U","x","·","@","µ","v","Ï","0","","z","'","C","¥","","þ","©","Z","í","","","Á","h","¼","D","Ñ","ñ","#","I","","Â","","ä","ô","ÿ","R","³","+","ª","f","Ó","²","[","(","ç","S","î","J","","®","É","L","Þ","´","w","¹","£","g","»","{","X","ù","È","P","æ","é","Ò","Ú","","B","","Y","º","¾","e","d","½","5","Å","}","Ý","ú"," ","T","","","~",";","ò","¶","¬","p","Æ","å","û"," ","ø","o","E",".","­","á","1","Ù","6","","","k","9","","\"","Ì","4","i","$","¤","","±","","<","Î","°","O","Û","\\","ü","ö","n","ß","2","Í","ó","Ë","A","Ð","¡","7","_","&","","à","s","«","","y","¢","","","`","a","§","ð","Ô","l","!","]","","Q","K","","c","ý","","W","","j","","Ö","-","r","Ü","?",",","÷","Ã","â","H","",":","¯","V","ï",")","","","b","è","Ç","Ø","Ä","¨"],
        ["ú","Ü","Þ","y","O","í","1","þ","×","","","î","ý","W","","¹","®","0","q","Ý","/","Û","Ò","a","_","h","ë","Ä","Ú","~","$","£","@","","]","¦","","P","è","¡","ã","ì","E","r","§","X","·","^","Î","","\\","Õ","U","9","²","ï","t","m","ò","Æ","Å","Ø","à","¸","¢","ÿ","³","¿","","»","¯","g","Ö","","B","À","f"," ","!","H",">","ô","K","Ð","ù"," ","","","","*","4",":","z","","d","µ","-","b","T","","","ü","Ù","p","|","å","","","","","¬","Ñ","ø","","\"","ß","`","Ô","©","<","G","","ð","n","õ","û","é","ö","j","","6","R","Q","S","+","N","","k","M","5","}","±","½","&","Â","{","É","","÷","V","%","°","#","Ï",".","Í","=","v","","","¾","ä","Ã","w","'","[","«","x","Ì",";",")","7","","A","","¤","l","c","D","","Ê","ñ","´","?","Y","","8","­","Z",",","F","L","ç","¶","Á","¨","¥","â","Ó","2","º","","È","u","ê","(","Ë","C","J","","ª","¼","i","Ç","ó","o","æ","I","","","3","e","á","s"],
        ["#","J","P","É","À","i","à","","§","ê","×","­","ã",""," ","²","","c","","®","-","è","ò","ù","Ë","","","Î","o","_","Þ","","v",";","È","a","F","r","0",">","f","u","","Û","¢","½","ç","","´","Ý","Ñ","æ","2","G","s","ì","ô","","","¼","","4","¤","T","â","¶","9","ý","Í","~","","","5","Á","é","K","7","/","D","b","ä","þ","¹","ñ","","Ù","w"," ",",","Z","÷","Q","E","³","A","","=","Ê","å","","*","","<","","t","^","","","»","",":",".","Ô","R","{","W","·","","ÿ","º","¬","¦","m","Õ","¿","Ï","|","ß","ú","]","Ò","L","@","O","","","'","}","I","","8","`","µ","(","V","«","U","Æ","°","l","k","S","","\"","¨","H","p","Y","Ö","û","Ã","ª","¯","j","x","N","£","ö","","î","ë","Ú","","Å","\\","Ø","?","Ó","©","y","","q","á","+","í","õ","M","¡","",")","X","d","e","g","B","Ç","¸","%","¥","Ì","6","$","","ó","C","h","Â","[","Ü","ø","3","z","n","ð","±","Ð","&","Ä","ü","1","ï","","!","¾"],
        ["¨","Ò","d","°","ù","b","×","¬","","Ü","","½","ï","7","Ï","",">","Þ","!","ª","","D","M","(","Ô","I","j","µ","","=","¸","","æ","ø","R","Ú","","Ó","\\","s","P","ì","4","ç","Î","è","Z","Ì","C","3","","ý","","","÷","'","¾","f","","®","·","Å","ë","O","Ù","Ã","r","û","k","È","","¶","Ý","F","","2","a","±","£","g","}","ÿ","Ø","á","þ","î","ö","Û","ê","z","ú","u","ß","Õ","J","Ä","à","ò","§","",".","o","?","","q","/","¦","ã","T","í","¥","W","`","$","¹","&","","¢","A","ð","","²","t",")","å","1","8","^","","ñ","","Ë","É","","Ð","ä","","","Ö"," ","","U","h","n","À","","_","e","Y","","l","+","w","¼","N","¿","Ç","E","Ê"," ","|","Q","¡","G","0","«","~","","","#","%","i","\"","","","â","Â","B","ü","S","©","6","9","»","Ñ","º","é","]","*","K","ô","m","H","¤","v","Á","y",",","c","ó","[","L","Í","õ","X","@","","´","V","","{","­",";",":","<","¯","Æ","5","","p","-","","x","³"],
        ["Ö","1","¸","4","","±","M","\\","","Ý",";","S","ô","Õ","¯","Ï","^","Ú","Â","ø","á","}","½","-","","Á","T","¡","O","ò","ð","¾","~","","í","ª","6","þ","¦","õ","Ã","'"," ",")","¢","","¤",">","æ","i","×","o","!","§","%","","B","Ô","«","Ñ","ù","Î","Ä","g","(","j","÷","","ö","$","3"," ","?","","Y","Ë",",","","£","à","¥","ß","v","X","Þ","ë","Í","E","","s","]","","³","F","<","ý","","[","Ø","t","+","x","î","\"","Ó","Æ","/","q","f","n","®","`","Q","G",".","","ç",":","ú","","b","º","","Z","&","é","w","ä","â","","","å","°","U","@","Ð","8","û","","À","»","ì","ï","É","","{","Ç","*","¨","ü","A","","","z","N","ã","","ñ","5","","_","y","","Ü","Ù","0","","","7","µ","2","C","","p","#","·","¹","©","R","u","¼","È","Ì","I","","ó","²","D","´","|","Ê","J","Å","ê","h","a","¿","P","L","H","","W","=","Û","9","e","è","V","m","k","¬","d","","","K","¶","l","","","c","ÿ","­","Ò","r"]
    ];
  }
}

export class NavMock {
 
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return ;
  }

}

export class NavParamsMock {

  static returnParam = false;


  public get(key): any {
    if (NavParamsMock.returnParam) {
       return NavParamsMock.returnParam
    }
    return 'default';
  }
  
  static setParams(value){
    NavParamsMock.returnParam = value;
  }
}

export class ViewControllerMock{
  readReady = {
    subscribe(){

    }
  };
  writeReady = {
    subscribe(){

    }
  };

  dismiss(){
    console.log('View Controller Dismiss Called');
  }
  _setHeader(){

  }
  _setNavbar(){

  }
  _setIONContent(){

  }
  _setIONContentRef(){

  }
}
export class DeepLinkerMock {

}