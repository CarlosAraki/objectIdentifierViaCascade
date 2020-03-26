import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { APP_CONFIG_TOKEN, ApplicationConfig } from '../../app/app-config';
/*
  Generated class for the ConnectionTestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectionTestProvider {

  private basePath = '';

  constructor(
    public http: HttpClient,
    private _plataform: Platform,
    @Inject(APP_CONFIG_TOKEN) private config: ApplicationConfig,
  ){
    console.log('Hello ConnectionTestProvider Provider');
    this.basePath = config.apiEndpoint;
  }

  public getAllConnection(){
    return this.http.get(this.basePath+'/test_model/'); 
  }

  public getByIdConnection(id){
    return this.http.get(this.basePath+'/test_model/'+id+'/');
  }

  public postConnection(body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };  
    return this.http.post(this.basePath+'/test_model/',body, httpOptions);
  }

  public patchByIdConnection(id,body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };  
    return this.http.patch(this.basePath+'/test_model/'+id+'/',body, httpOptions);
  }

  public putByIdLogin(id,body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };  
    return this.http.put(this.basePath+'/test_model/'+id+'/',body,httpOptions);
  }

  public excludeByIdLogin(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };  
    let body = {
      "exclude" : 'sim' 
    }
    return this.http.patch(this.basePath+'/test_model/'+id+'/',body,httpOptions);
  }



}
