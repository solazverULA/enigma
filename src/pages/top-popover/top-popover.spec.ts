import { async, TestBed } from '@angular/core/testing';

import { 
  IonicModule, 
  NavController, 
  ViewController, 
  NavParams
} from 'ionic-angular';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 
  SettingRouterscombinationPage 
} from '../setting-routerscombination/setting-routerscombination';

import { HelpPage } from '../help/help';

import { TopPopoverPage } from './top-popover';
import { MyApp } from '../../app/app.component'
import { 
  NavMock, 
  ViewControllerMock,
  NavParamsMock
} from '../../../test-config/mocks-ionic';

describe('Popover: Top-Popover', () => {
  let fixture;
  let component;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [
        MyApp, TopPopoverPage
      ],
      
      providers: [
        { provide: NavController, useClass: NavMock },
        { provide: ViewController, useClass:ViewControllerMock},
        { provide: NavParams, useClass:NavParamsMock}
      ],
      
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPopoverPage);
    component = fixture.componentInstance;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should be able to launch SettingRouterscombination page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('button#setting'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(SettingRouterscombinationPage);
  });

  it('should be able to launch Help page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('button#help'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(HelpPage);
  });
});
