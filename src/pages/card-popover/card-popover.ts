import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-card-popover',
  template: `
      <button ion-item (click)="share()">Compartir</button>
    	<button ion-item (click)="clean()">Limpiar</button>
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