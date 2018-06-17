import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { WelcomePage } from '../pages/welcome/welcome';
import { MainPage } from '../pages/main/main';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any= WelcomePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    storage: Storage) 
  {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      storage.set('wiringsSelected', [0,1,2]);
      storage.get('ready').then((val) => {
        if(val) this.rootPage = MainPage;
      });

    });
  }
}

