import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WiringsProvider } from '../../providers/wirings/wirings';


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
  r1 = 1;
  r2 = 2;
	r3 = 3;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public wiring: WiringsProvider)
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingRouterscombinationPage');
  }

}
