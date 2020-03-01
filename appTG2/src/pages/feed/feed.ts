import { PictureshostProvider } from './../../providers/pictureshost/pictureshost';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PicturesProvider } from '../../providers/pictures/pictures';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    PictureshostProvider
  ]
})
export class FeedPage {
  
  public src_pictures: any =[];
  public loading:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _pictureProvider : PicturesProvider,
    public loadingCtrl: LoadingController
    ){
      this.loading = this.loadingCtrl.create({
        content: 'Espera ai to carregando ...'
      });
    }

  ionViewWillEnter(){
    this.loading.present();
    this.dataCatch();
  }

  /**
   * 
   * @param teste_de_numero 
   */
  public testeDeFuncao(teste_de_numero) :number {
    return teste_de_numero;
  }

  public dataCatch(){
    this._pictureProvider.getAllNotExcludePictures().subscribe(
      data=>{
        console.log(data)
        this.src_pictures = data;
        this.loading.dismiss();
      },
      error=>{
        console.log('erro dataCatch')
        this.loading.dismiss();
      }
    )
  }
}
