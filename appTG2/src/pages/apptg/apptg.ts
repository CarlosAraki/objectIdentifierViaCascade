import { Component } from '@angular/core';
import { IonicPage,AlertController ,ModalController, NavController, NavParams } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ApptgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apptg',
  templateUrl: 'apptg.html',
})
export class ApptgPage {
  
  _idImagens = ['1','2'];
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    private camera:Camera,
    public alertCtrl: AlertController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApptgPage');
  }

  cameraButton(){
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
      let data = {
        jsonPic,
        date
      }
      let json = JSON.stringify(data);
      // this.savePicture(json);
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }

  listButton(){
    console.log('click')
  }

  clearButton(){
    this._idImagens = []
  }

  getButton(){
    let alert = this.alertCtrl.create({
      title: 'Get Pic By Id',
      inputs: [
        {
          name: 'idnumber',
          placeholder: 'Id Number',
          type:'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Get Pic',
          handler: () => {
            console.log('Get clicked');
          }
        }
      ]
    });
    alert.present();
  }

  optionsButton(id){
    console.log('click')
    const optionsModal = this.modalCtrl.create('OptionsPage',{id:id})
    optionsModal.present()
  }

  excludeButton(id){
    console.log('click')
  }
}
