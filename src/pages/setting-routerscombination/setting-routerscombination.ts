import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WiringsProvider } from '../../providers/wirings/wirings';
import { MainPage } from '../main/main';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SettingRouterscombinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-routerscombination',
  templateUrl: 'setting-routerscombination.html',
})
export class SettingRouterscombinationPage {
  r1:number;
  r2:number;
	r3:number;
  constructor(
  	public navCtrl: NavController,
  	public wiring: WiringsProvider,
    public storage: Storage)
  {
    storage.get('wiringsSelected').then((val) => {
      this.r1 = val[0];
      this.r2 = val[1];
      this.r3 = val[2];
    });
  }

  done(){
    this.storage.set('wiringsSelected', [this.r1,this.r2,this.r3]);
    this.navCtrl.push(MainPage);
  }
}
