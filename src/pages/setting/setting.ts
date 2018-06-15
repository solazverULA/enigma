import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SettingCustomreflectorPage } from '../setting-customreflector/setting-customreflector';
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

  constructor(public navCtrl: NavController) {
  }

	routerscombination() {
		this.navCtrl.push(SettingRouterscombinationPage);
	}

	customreflector() {
		this.navCtrl.push(SettingCustomreflectorPage);
	}

}
