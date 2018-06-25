import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpARoutersPage } from '../help-a-routers/help-a-routers';
import { HelpGEncriptPage } from '../help-g-encript/help-g-encript';
import { HelpGSharePage } from '../help-g-share/help-g-share';
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

  howEncrip() {
    this.navCtrl.push(HelpGEncriptPage);
  }

  howShare() {
    this.navCtrl.push(HelpGSharePage);
  }

  howCombination() {
    this.navCtrl.push(HelpARoutersPage);
  }
}
