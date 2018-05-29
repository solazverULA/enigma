import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingCustomreflectorPage } from '../setting-customreflector/setting-customreflector';
import { SettingInitialpositionPage } from '../setting-initialposition/setting-initialposition';
import { SettingRouterscombinationPage } from '../setting-routerscombination/setting-routerscombination';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

	initialposition() {
		this.navCtrl.push(SettingCustomreflectorPage);
	}

	routerscombination() {
		this.navCtrl.push(SettingInitialpositionPage);
	}

	customreflector() {
		this.navCtrl.push(SettingRouterscombinationPage);
	}

}
