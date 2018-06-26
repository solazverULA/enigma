import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MainPage } from '../main/main';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
  	public navCtrl: NavController, 
  	private storage: Storage
  	){}

  slides = [
    {
      title: "Bienvenido a Enigma",
      description: "EL <b>Enigma</b> Proyecto busca aumentar la seguridad de la información que compartes día a día,"
      +"con una aplicacion de bolsillo, para usarla cuando quieras y donde quieras",
      icon:"key"
    },
    {
      title: "Informacion Personal",
      description: "<b>Enigma</b> Nunca, Recoleptara o ningun tipo de información personal durante su ejecucion,"+
      "asegurece que la posicion de los routers sea la correcta.",
      icon:"alert"
    }
  ];

  ready() {
  	//this.storage.set('ready', true);
  	this.navCtrl.setRoot(MainPage);
  }
}
