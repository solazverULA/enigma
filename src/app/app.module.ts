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
import { HelpAReflectorPage } from '../pages/help-a-reflector/help-a-reflector';
import { HelpARoutersPage } from '../pages/help-a-routers/help-a-routers';
import { HelpGEncriptPage } from '../pages/help-g-encript/help-g-encript';
import { HelpGSharePage } from '../pages/help-g-share/help-g-share';
import { SettingPage } from '../pages/setting/setting';
import { SettingCustomreflectorPage } from '../pages/setting-customreflector/setting-customreflector';
import { SettingInitialpositionPage } from '../pages/setting-initialposition/setting-initialposition';
import { SettingRouterscombinationPage } from '../pages/setting-routerscombination/setting-routerscombination';
import { PlugboardProvider } from '../providers/plugboard/plugboard';
import { RoutersProvider } from '../providers/routers/routers';
import { ReflectorProvider } from '../providers/reflector/reflector';
import { WiringsProvider } from '../providers/wirings/wirings';
import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';


@NgModule({
  declarations: [
    MyApp,
    MainPage,
    TopPopoverPage,
    CardPopoverPage,
    WelcomePage,
    HelpPage,
    HelpAReflectorPage,
    HelpARoutersPage,
    HelpGEncriptPage,
    HelpGSharePage,
    SettingPage,
    SettingCustomreflectorPage,
    SettingInitialpositionPage,
    SettingRouterscombinationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    TopPopoverPage,
    CardPopoverPage,
    WelcomePage,
    HelpPage,
    HelpAReflectorPage,
    HelpARoutersPage,
    HelpGEncriptPage,
    HelpGSharePage,
    SettingPage,
    SettingCustomreflectorPage,
    SettingInitialpositionPage,
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
    SocialSharing
  ]
})
export class AppModule {}
