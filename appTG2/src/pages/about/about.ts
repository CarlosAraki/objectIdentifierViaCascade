import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  currentImage: any;

  constructor(
    public navCtrl: NavController,
    private camera:Camera
    ){}

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
      let uri =  'data:image/jpeg;base64,' + imageData;
      console.log('data_image',uri)
      this.currentImage = uri;
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }
}
