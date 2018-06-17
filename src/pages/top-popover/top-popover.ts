import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { SettingRouterscombinationPage } from '../setting-routerscombination/setting-routerscombination';
import { HelpPage } from '../help/help';

@Component({
  selector: 'page-top-popover',
  template: `
    <ion-list>
	    <ion-item>
		    <ion-label>Tiempo real</ion-label>
		    <ion-toggle [(ngModel)]="realtime" (ngModelChange)="close($event)" ></ion-toggle>
		  </ion-item>
    	<button ion-item (click)="setting()">Configuración</button>
    	<button ion-item (click)="help()">Ayuda</button>
    </ion-list>
  `
})
export class TopPopoverPage {

	realtime :boolean;
  constructor(
  	public viewCtrl: ViewController,
  	public navCtrl: NavController,
  	public navParams: NavParams
  	) {
  	 this.realtime = this.navParams.data.realtime;
  }

  close(event) {
    this.viewCtrl.dismiss(event);
  }

  setting() {
  	this.navCtrl.push(SettingRouterscombinationPage);
  }

  help() {
  	this.navCtrl.push(HelpPage);
  }
}