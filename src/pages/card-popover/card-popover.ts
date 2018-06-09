import { Component } from '@angular/core';

@Component({
    template: `
	    <ion-list>
      	<button ion-item (click)="copy()">Copiar</button>
      	<button ion-item (click)="share()">Compartir</button>
	    </ion-list>
	  `
})
export class CardPopoverPage {
  
  copy() {
    alert('copy');
  }

  share() {
  	alert('share');
  }
}