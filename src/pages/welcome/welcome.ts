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
      +"con una aplicación de bolsillo, para usarla cuando quieras y donde quieras",
      icon:"key"
    },
    {
      title: "Importar/Exportar configuración",
      description: "Puede <b>Importar</b> y <b>Exportar</b> su configuración en un archivo <b>*.enm</b>"+
      "desde la vista de configuraciones, <i>los archivos exportados se localizan en la carpeta <b>enigmaFolder</b></i>",
      icon:"document"
    },
    {
      title: "Información Personal",
      description: "<b>Enigma</b> Nunca recoleptara ningun tipo de información personal durante su ejecución,"+
      "asegúrese que la posición de los routers sea la correcta.",
      icon:"alert"
    }
  ];

  ready() {
  	this.storage.set('ready', true);
  	this.navCtrl.setRoot(MainPage);
  }
}
