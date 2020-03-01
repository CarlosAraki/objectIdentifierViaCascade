import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PicturesProvider } from '../../providers/pictures/pictures';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public currentImage: any;
  public allPic: any =[];
  public loading:any;
  public focusPic64:any; 
  public focusPicid:any; 

  constructor(
    public navCtrl: NavController,
    private camera:Camera,
    public _pictureProvider : PicturesProvider,
    public loadingCtrl: LoadingController
    ){
      this.loading = this.loadingCtrl.create({
        content: 'Espera ai to carregando ...'
      });
    }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      let jsonPic =  'data:image/png;base64,' + imageData;
      let date: Date = new Date();  
      this.currentImage = jsonPic;
      let data = {
        jsonPic,
        date
      }
      let json = JSON.stringify(data);
      this.savePicture(json);
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }

  savePicture(jsonStringify){
    this._pictureProvider.addPicture(jsonStringify).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log('erro savePicture');
      }
    )
  }

  allPictures(){
    this.loading.present();
    this._pictureProvider.getAllNotExcludePictures().subscribe(
      data=>{
        console.log(data)
        this.allPic = data;
        this.loading.dismiss();
      },
      error=>{
        console.log('erro allPicture')
        this.loading.dismiss();
      }
    )
  }


  visualizarPicture(id){
    this._pictureProvider.getPictureById((id)).subscribe(
      data=>{
        let focusPicAux :any = []; 
        focusPicAux = data;
        this.focusPicid = focusPicAux.id;
        this.focusPic64 = focusPicAux.jsonPic;
        console.log(this.focusPic64)
      },
      error=>{
        console.log('erro');
      }
    )
  }

  excluirPicture(id){
    this.loading.present();
    let idjson = {"id" : id}
    this._pictureProvider.excludePicture((idjson)).subscribe(
      data=>{
        this.allPic = (data as any);
        this.loading.dismiss();
      },
      error=>{
        console.log('erro');
        this.loading.dismiss();
      }
    )
  }

  clearPictures(){
    this.allPic = [];
  }

  clearPicture(){
    console.log(this.focusPic64)
    this.focusPic64 = '';
  }
}
