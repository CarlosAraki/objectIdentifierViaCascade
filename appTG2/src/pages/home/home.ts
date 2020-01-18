import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginsProvider } from '../../providers/logins/logins';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public src_logins: any =[];
  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public _loginsProvider : LoginsProvider,
    public formBuilder: FormBuilder,
    ) 
    {
      var login = '';
	    var senha = '';
      this.loginForm = formBuilder.group({
        login: [login],
        senha: [senha]
      });
      this._loginsProvider.getAllNotExcludeLogins().subscribe(
        data=>{
          this.src_logins = (data as any);
        },
        error=>{
          console.log('erro');
        }
      )
    }

  salvarLogin(){
    let credentials = {
      login: this.loginForm.value.login,
      senha: this.loginForm.value.senha
    };
    let credentialsJSON = JSON.stringify(credentials);
    this._loginsProvider.addLogin(credentialsJSON).subscribe(
      data=>{
        this.src_logins = (data as any);
      },
      error=>{
        console.log('erro');
      }
    )
  }

  excluirLogin(id){
    let idjson = {"id" : id}
    this._loginsProvider.excludeLogin((idjson)).subscribe(
      data=>{
        this.src_logins = (data as any);
      },
      error=>{
        console.log('erro');
      }
    )
  }

}
