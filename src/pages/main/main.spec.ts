import { async, TestBed } from '@angular/core/testing';

import { 
  IonicModule, 
  NavController, 
  ViewController, 
  NavParams,
  ToastController
} from 'ionic-angular';

import { PlugboardProvider } from '../../providers/plugboard/plugboard';
import { ReflectorProvider } from '../../providers/reflector/reflector';
import { WiringsProvider } from '../../providers/wirings/wirings';
import { RoutersProvider } from '../../providers/routers/routers';

import { TopPopoverPage } from '../top-popover/top-popover';
import { CardPopoverPage } from '../card-popover/card-popover';

import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from '@ionic/storage';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainPage } from './main';
import { MyApp } from '../../app/app.component'

import { 
  NavMock, 
  ViewControllerMock,
  NavParamsMock,
  IonicStorageMock,
  ClipboardMock,
  SocialSharingMock,
  ToastControllerMock
} from '../../../test-config/mocks-ionic';

describe('PageL Help Page', () => {
  let fixture;
  let component;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [
        MyApp, MainPage
      ],
      
      providers: [
        { provide: NavController, useClass: NavMock },
        { provide: ViewController, useClass:ViewControllerMock},
        { provide: NavParams, useClass:NavParamsMock}
        { provide: PlugboardProvider, useClass:PlugboardProvider },
        { provide: ReflectorProvider, useClass:ReflectorProvider },
        { provide: WiringsProvider, useClass:WiringsProvider },
        { provide: RoutersProvider, useClass:RoutersProvider }
        { provide: Clipboard, useClass: ClipboardMock},
        { provide: SocialSharing, useClass: SocialSharingMock},
        { provide: ToastController, useClass: ToastControllerMock},
        { provide: Storage, useClass: IonicStorageMock}
      ],
      
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });


  it('charge position', () => {
    component.positions[0] ='K';
    component.positions[1] ='@';
    component.positions[2] ='1';

    component.move(0);
    component.move(1);
    component.move(2);

    expect(component.move(0)).toBe('K');
    expect(component.move(1)).toBe('@');
    expect(component.move(2)).toBe('1');
  });
});
