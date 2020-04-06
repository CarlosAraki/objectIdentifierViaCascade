import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {
  idPic
  algorithmType
  compareImage 
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad OptionsPage');
    this.idPic =  this.navParams.get('id')
  }

  processButton(){
    const compareModal = this.modalCtrl.create('ComparePage',{id:this.algorithmType})
    compareModal.present()
  }

  compareButton(){
    const compareModal = this.modalCtrl.create('ComparePage',{id:this.compareImage})
    compareModal.present()
  }

  closeOptions(){
    this.viewCtrl.dismiss()
  }

}
