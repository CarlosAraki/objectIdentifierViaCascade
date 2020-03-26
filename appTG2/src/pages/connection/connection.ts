import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConnectionTestProvider } from '../../providers/connection-test/connection-test';

/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
})
export class ConnectionPage {
  public nameList: any =[];
  public inputNewName : any = [];
  public formName: FormGroup;
  public formId: FormGroup;

  constructor(
    public navCtrl: NavController,
    public connectionTestProvider : ConnectionTestProvider,
    public formBuilder: FormBuilder,
    ) {
    let name = '';
    let id = '';
    this.formName = formBuilder.group({
      name: [name]
    });
    this.formId = formBuilder.group({
      id: [id]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
  }

  postButton(){
    let body = {
      name: this.formName.value.name,
      exclude:'nao'
    };
    let bodyJSON = JSON.stringify(body);
    this.connectionTestProvider.postConnection(bodyJSON).subscribe(
      data=>{
        var a=[], b=data;
        a.push(b);
        this.nameList = a;
      },e=>{
        console.log('ErrorPostConnection__46',e);
      })
  }

  getAllButton(){
    this.connectionTestProvider.getAllConnection().subscribe(
      data=>{
        let prep = this.removeExclude(data);
        this.nameList = (prep as any);
        console.log('nameList',data);

        this.inputNewName = this.nameList;
      },e=>{
        console.log('ErrorGetAllConnection__55',e);
      })
  }

  getByIdButton(){
    let id = this.formId.value.id;
    this.connectionTestProvider.getByIdConnection(id).subscribe(
      data=>{
        var a=[], b=JSON.parse(JSON.stringify(data));
        a.push(b);
        this.nameList =[];
        this.nameList = a;
        console.log('aaaa',a)
        console.log('aaaa',data)
        console.log('aaaa',this.nameList)
      },e=>{
        console.log('ErrorGetByIdConnection__64',e);
      })
  }

  clearListButton(){
    this.nameList = [];
  }

  editButtonByID(id = 0){
    let body = {
      name: this.inputNewName[--id].name
    };
    id++
    let bodyJSON = JSON.stringify(body);
    this.connectionTestProvider.patchByIdConnection(id,bodyJSON).subscribe(
      data=>{
        var a=[], b= JSON.parse(JSON.stringify(data));
        a.push(b);
       
      },e=>{
        console.log('ErrorEditConnection__72',e);
      })
  }

  deleteButtonByID(id = 0){
    this.connectionTestProvider.excludeByIdLogin(id).subscribe(
      data=>{
        var a=[], b=data;
        a.push(b);
        this.nameList = a;
      },e=>{
        console.log('ErrorEditConnection__72',e);
      })
  }

  private removeExclude(arr) {
    for(var i in arr){
      if(arr[i].exclude=='sim'){
          arr.splice(i,1);
      }
    }
    return arr;
  }

}
