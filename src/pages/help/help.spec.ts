import { async, TestBed } from '@angular/core/testing';
import { IonicModule, NavController} from 'ionic-angular';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelpARoutersPage } from '../help-a-routers/help-a-routers';
import { HelpGEncriptPage } from '../help-g-encript/help-g-encript';
import { HelpGSharePage } from '../help-g-share/help-g-share';

import { HelpPage } from './help';
import { MyApp } from '../../app/app.component'
import { NavMock } from '../../../test-config/mocks-ionic';

describe('PageL Help Page', () => {
  let fixture;
  let component;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [
        MyApp, HelpPage
      ],
      
      providers: [
        { provide: NavController, useClass: NavMock }
      ],
      
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPage);
    component = fixture.componentInstance;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should be able to launch HelpGEncriptPage page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('ion-item#howEncrip'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(HelpGEncriptPage);
  });


  it('should be able to launch HelpARoutersPage page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('ion-item#howCombination'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(HelpARoutersPage);
  });


  it('should be able to launch HelpGSharePage page', () => {
 
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('ion-item#howShare'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(HelpGSharePage);
  });

});
