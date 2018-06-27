import { async, TestBed } from '@angular/core/testing';
import { IonicModule, NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainPage } from '../main/main';

import { WelcomePage } from './welcome';
import { MyApp } from '../../app/app.component'
import { 
  NavMock,
  IonicStorageMock 
} from '../../../test-config/mocks-ionic';

describe('Page: Welcome Page', () => {
  let fixture;
  let component;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [
        MyApp, WelcomePage
      ],
      
      providers: [
        { provide: NavController, useClass: NavMock },
        { provide: Storage, useClass: IonicStorageMock }
      ],
      
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });


  it('omit launches the MainPage page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'setRoot');

    de = fixture.debugElement.query(By.css('ion-buttons button'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.setRoot).toHaveBeenCalledWith(MainPage);
  });

  it('continue launches the MainPage page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'setRoot');

    de = fixture.debugElement.query(By.css('ion-slide button'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.setRoot).toHaveBeenCalledWith(MainPage);
  });

});
