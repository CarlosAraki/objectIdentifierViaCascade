import { Component } from '@angular/core';
import { IonicPage, AlertController, ModalController, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PicturesProvider } from '../../providers/pictures/pictures';

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

  _idImagens : any = [{}];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private camera: Camera,
    public _pictureProvider: PicturesProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApptgPage');
  }

  cameraButton() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      let jsonPic = 'data:image/jpg;base64,' + imageData;
      let date: Date = new Date();
      let body = {
        data64: jsonPic,
        exclude: 'nao',
      };
      this.savePicture(body);
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }

  listButton() {
    this._pictureProvider.getAllNotExcludePictures().subscribe(
      data => {
        console.log(data);
        this._idImagens = data;
      },
      error => {
        console.log('erro savePicture');
      }
    )
  }

  clearButton() {
    this._idImagens = [];
  }

  getButton() {
    let alert = this.alertCtrl.create({
      title: 'Get Pic By id',
      inputs: [
        {
          name: 'idnumber',
          placeholder: 'Id Number',
          type: 'number'
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
            this._pictureProvider.getPictureById(name).subscribe(
              data => {
                this._idImagens = data
                console.log(data);
              },
              error => {
                console.log('erro savePicture');
              }
            )
          }
        }
      ]
    });
    alert.present();
  }

  optionsButton(pic) {
    const optionsModal = this.modalCtrl.create('OptionsPage', { pic: pic })
    optionsModal.present()
  }

  excludeButton(id) {
    this._pictureProvider.excludePicture(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('erro savePicture');
      }
    )
    console.log('click')
  }

  savePicture(bodyImage) {
    console.log(bodyImage);
  
    let jsonStringifyBodyImage  = JSON.stringify(bodyImage);
    this._pictureProvider.addPicture(jsonStringifyBodyImage).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('erro savePicture');
      }
    )
  }
}
