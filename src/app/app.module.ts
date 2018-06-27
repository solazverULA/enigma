import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { TopPopoverPage } from '../pages/top-popover/top-popover';
import { CardPopoverPage } from '../pages/card-popover/card-popover';
import { WelcomePage } from '../pages/welcome/welcome';
import { HelpPage } from '../pages/help/help';
import { HelpARoutersPage } from '../pages/help-a-routers/help-a-routers';
import { HelpGEncriptPage } from '../pages/help-g-encript/help-g-encript';
import { HelpGSharePage } from '../pages/help-g-share/help-g-share';
import { SettingRouterscombinationPage } from '../pages/setting-routerscombination/setting-routerscombination';
import { PlugboardProvider } from '../providers/plugboard/plugboard';
import { RoutersProvider } from '../providers/routers/routers';
import { ReflectorProvider } from '../providers/reflector/reflector';
import { WiringsProvider } from '../providers/wirings/wirings';
import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    TopPopoverPage,
    CardPopoverPage,
    WelcomePage,
    HelpPage,
    HelpARoutersPage,
    HelpGEncriptPage,
    HelpGSharePage,
    SettingRouterscombinationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    TopPopoverPage,
    CardPopoverPage,
    WelcomePage,
    HelpPage,
    HelpARoutersPage,
    HelpGEncriptPage,
    HelpGSharePage,
    SettingRouterscombinationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlugboardProvider,
    RoutersProvider,
    ReflectorProvider,
    WiringsProvider,
    Clipboard,
    SocialSharing,
    FileChooser,
    File,
    FilePath
  ]
})
export class AppModule {}
