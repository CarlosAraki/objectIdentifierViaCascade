import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PictureshostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PictureshostProvider {

  private basePath = 'http://localhost:8080/'
  constructor(public http: HttpClient) {
    console.log('Hello PictureshostProvider Provider');
  }

  public ping(){
    return this.http.get(this.basePath+'data');
  }

}
