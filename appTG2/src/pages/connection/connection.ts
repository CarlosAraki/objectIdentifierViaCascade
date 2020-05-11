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
  public nameList: any = [];
  public inputNewName: any = [];
  public formName: FormGroup;
  public formId: FormGroup;

  constructor(
    public navCtrl: NavController,
    public connectionTestProvider: ConnectionTestProvider,
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

  postButton() {
    let body = {
      name: this.formName.value.name,
      exclude: 'nao'
    };
    let bodyJSON = JSON.stringify(body);
    this.connectionTestProvider.postConnection(bodyJSON).subscribe(
      data => {
        var a = [], b = data;
        a.push(b);
        this.nameList = a;
        this.inputNewName = a;
      }, e => {
        console.log('ErrorPostConnection__', e);
      })
  }

  getAllButton() {
    this.connectionTestProvider.getAllConnection().subscribe(
      data => {
        let prep = this.removeExclude(data);
        this.nameList = (prep as any);
        this.inputNewName = this.nameList;
      }, e => {
        console.log('ErrorGetAllConnection__', e);
      })
  }

  getByIdButton() {
    let id = this.formId.value.id;
    this.connectionTestProvider.getByIdConnection(id).subscribe(
      data => {
        var a = [], b = JSON.parse(JSON.stringify(data));
        a.push(b);
        this.nameList = a;
        this.inputNewName = a;
      }, e => {
        console.log('ErrorGetByIdConnection__', e);
      })
  }

  clearListButton() {
    this.nameList = [];
    this.inputNewName = [];
  }

  editButtonByID(id = 0) {
    let arr = this.returnId(this.inputNewName, id)
    if (!arr) return false;
    let body = {
      name: arr.name
    };
    let bodyJSON = JSON.stringify(body);
    console.log(bodyJSON)
    this.connectionTestProvider.patchByIdConnection(id, bodyJSON).subscribe(
      data => {
        this.inputNewName = [];
        this.nameList = [];
        this.getAllButton()
      }, e => {
        console.log('ErrorEditConnection__', e);
      })
  }

  deleteButtonByID(id = 0) {
    this.connectionTestProvider.excludeByIdLogin(id).subscribe(
      data => {
        this.inputNewName = [];
        this.nameList = [];
        this.getAllButton()
      }, e => {
        console.log('ErrorDeleteConnection__', e);
      })
  }

  private removeExclude(arr) {
    let arr2 = [];
    for (var i in arr) {
      if (arr[i].exclude == 'nao') {
        arr2.push(arr[i])
      }
    }
    return arr2;
  }

  private returnId(arr, id) {
    for (var i in arr) {
      if (arr[i].id == id) {
        return arr[i];
      }
    }
    return false;
  }

}
