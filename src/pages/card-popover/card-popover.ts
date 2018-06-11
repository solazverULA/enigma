import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
    template: `
	    <ion-list>
        <button ion-item (click)="share()">Compartir</button>
      	<button ion-item (click)="clean()">Limpiar</button>
	    </ion-list>
	  `
})
export class CardPopoverPage {

  constructor(public viewCtrl: ViewController){}
  
  clean() {
    this.viewCtrl.dismiss(0);
  }

  share() {
    this.viewCtrl.dismiss(1);
  }
}