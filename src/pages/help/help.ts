import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingCustomreflectorPage } from '../setting-customreflector/setting-customreflector';
import { SettingInitialpositionPage } from '../setting-initialposition/setting-initialposition';
import { SettingRouterscombinationPage } from '../setting-routerscombination/setting-routerscombination';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  reflector() {
  	this.navCtrl.push(SettingCustomreflectorPage);
  }

  position() {
  	this.navCtrl.push(SettingInitialpositionPage);
  }

  combination() {
  	this.navCtrl.push(SettingRouterscombinationPage);
  }

}
