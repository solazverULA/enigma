import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { WiringsProvider } from '../../providers/wirings/wirings';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { MainPage } from '../main/main';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SettingRouterscombinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-routerscombination',
  templateUrl: 'setting-routerscombination.html',
})
export class SettingRouterscombinationPage {
  r1:number;
  r2:number;
	r3:number;
  p1:number;
  p2:number;
  p3:number;
  namefile: string;
  constructor(
  	public navCtrl: NavController,
  	public wiring: WiringsProvider,
    public storage: Storage,
    public toastCtrl: ToastController,
    private file: File,
    private fileChooser: FileChooser,
    private filePath: FilePath)
  {
    storage.get('wiringsSelected').then((val) => {
      this.r1 = val[0];
      this.r2 = val[1];
      this.r3 = val[2];
    });

    this.storage.get('routersSelected')
    .then((val) => {
      this.p1 = val[0];
      this.p2 = val[1];
      this.p3 = val[2]; 
    });
  }

  done(){
    this.storage.set('wiringsSelected', [this.r1,this.r2,this.r3]);
    this.storage.set('routersSelected', [this.p1,this.p2,this.p3]);
    this.navCtrl.push(MainPage);
  }

  import(){
    this.fileChooser.open()
      .then(uri => 
        {
          this.filePath.resolveNativePath(uri)
          .then(filePath => {
            this.readfile(filePath);
          })
          .catch(err => console.log(err));
        })
      .catch(err => console.log(err));
  }

  readfile(filePath){
    let filename = "";
    let contentArray;

    while(filePath.substr(-1) != '/'){
      filename = filePath.substr(-1) + filename;
      filePath = filePath.slice(0, -1);
    }

    if(filename.split('.').pop() != 'enm')
    {
      const toast = this.toastCtrl.create({
        message: 'El formato es invalido, solo *.enm',
        duration: 3000
      });
      toast.present();
    }
    else
    {      
      this.file.readAsText(filePath,filename)
      .then(text => {
        contentArray = text.split(",");

        if (contentArray.length != 6)
        {
          const toast = this.toastCtrl.create({
            message: 'Archivo roto o incompatible',
            duration: 3000
          });
          toast.present();
        }
        else
        {
          this.r1 = Number(contentArray[0]);
          this.r2 = Number(contentArray[1]);
          this.r3 = Number(contentArray[2]);
          this.p1 = contentArray[3];
          this.p2 = contentArray[4];
          this.p3 = contentArray[5]; 

          const toast = this.toastCtrl.create({
            message: 'Configuración Cargada',
            duration: 3000
          });
          toast.present(); 
        }
      });
    }
   }

  export(){
    if(this.namefile.split('.').pop() != 'enm')
    {
      const toast = this.toastCtrl.create({
        message: 'El formato es invalido, solo *.enm',
        duration: 3000
      });

      toast.present();
    }
    else{
      this.file.createDir(this.file.externalRootDirectory,'enigmaFolder',true)
      .then(res => {

        var content 
          = this.r1.toString()
          + "," 
          + this.r2.toString()
          + ","
          + this.r3.toString()
          + "," 
          + this.p1 
          + ","
          + this.p2 
          + ","
          + this.p3;

        this.file.writeFile(res.toURL(),this.namefile,content,{replace: true})
        .then(t => {
            const toast = this.toastCtrl.create({
              message: 'Archivo Guardado',
              duration: 3000
            });

            toast.present();
        })

        })
      .catch(e => console.log(e));
    }

  }
}
