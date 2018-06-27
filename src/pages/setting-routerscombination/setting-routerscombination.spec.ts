import { async, TestBed } from '@angular/core/testing';
import { IonicModule, NavController} from 'ionic-angular';
import { WiringsProvider } from '../../providers/wirings/wirings';
import { Storage } from '@ionic/storage';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainPage } from '../main/main';

import { SettingRouterscombinationPage } from './setting-routerscombination';
import { MyApp } from '../../app/app.component'
import { 
  NavMock,
  IonicStorageMock,
  WiringsMock 
} from '../../../test-config/mocks-ionic';

describe('Page: Setting Combianation Page', () => {
  let fixture;
  let component;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [
        MyApp, SettingRouterscombinationPage
      ],
      
      providers: [
        { provide: NavController, useClass: NavMock },
        { provide: Storage, useClass: IonicStorageMock },
        { provide: WiringsProvider, useClass: WiringsMock } 
      ],
      
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingRouterscombinationPage);
    component = fixture.componentInstance;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should be able to launch Main page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('ion-toolbar button'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(MainPage);
  });


});
