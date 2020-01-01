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
})
export class FeedPage {
  
  public src_pictures: any = [
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.testeDeFuncao(33);
  }

  /**
   * 
   * @param teste_de_numero 
   */
  public testeDeFuncao(teste_de_numero) :number {
    return teste_de_numero;
  }
}
