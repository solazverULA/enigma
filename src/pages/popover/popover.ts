import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { SettingPage } from '../setting/setting';
import { HelpPage } from '../help/help';

@Component({
    template: `
	    <ion-list>
		    <ion-item>
			    <ion-label>Tiempo real</ion-label>
			    <ion-toggle [(ngModel)]="realtime"></ion-toggle>
			</ion-item>
	      	<button ion-item (click)="setting()">Configuracion</button>
	      	<button ion-item (click)="help()">Ayuda</button>
	    </ion-list>
	  `
})
export class PopoverPage {

  constructor(
  	public viewCtrl: ViewController,
  	public navCtrl: NavController
  	) {}

  close() {
    this.viewCtrl.dismiss();
  }

    setting() {
  	this.navCtrl.push(SettingPage);
  }

  help() {
  	this.navCtrl.push(HelpPage);
  }
}