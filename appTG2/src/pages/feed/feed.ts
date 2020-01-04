import { PictureshostProvider } from './../../providers/pictureshost/pictureshost';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  
  public src_pictures: any =
  [
    {
    src : "assets/pictures/teste.png",
    title :"Titulo 1",
    description: "Descrição 1"
    },
    {
    src : "assets/pictures/teste.png",
    title :"Titulo 2",
    description: "Descrição 2"
    },
    {
    src : "assets/pictures/teste.png",
    title :"Titulo 3",
    description: "Descrição 3"
    }
    ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _pictureshostProvider : PictureshostProvider
    ){}

  ionViewDidLoad() {
    console.log('aaa');
    this.testeDeFuncao(33);
  }

  /**
   * 
   * @param teste_de_numero 
   */
  public testeDeFuncao(teste_de_numero) :number {
    return teste_de_numero;
  }

  public dataCatch(){
    this._pictureshostProvider.ping().subscribe(
      data=>{
        const response = (data as any);
        const obj_return = JSON.parse(response._body)
        this.src_pictures = (obj_return);
        console.log('data11',this.src_pictures);
      },
      error=>{
        console.log('erro');
      }
    )
  }
}
