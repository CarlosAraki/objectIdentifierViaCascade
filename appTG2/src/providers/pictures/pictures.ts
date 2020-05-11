import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ApplicationConfig, APP_CONFIG_TOKEN } from '../../app/app-config';

/*
  Generated class for the PicturesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PicturesProvider {

  private basePath = '';

  constructor(
    public http: HttpClient,
    private _plataform: Platform,
    @Inject(APP_CONFIG_TOKEN) private config: ApplicationConfig,
  ) {
    if (this._plataform.is("cordova")) {
      this.basePath = config.apiEndpoint;
    }
  }

  public getAllNotExcludePictures() {
    return this.http.get(this.basePath + '/picture_origin/');
  }

  public addPicture(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.basePath + '/picture_origin/', body, httpOptions);
  }


  public excludePicture(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let body = {
      "exclude": "sim"
    }
    return this.http.patch(this.basePath + '/picture_origin/' + id + '/', JSON.stringify(body), httpOptions);
  }

  public getPictureById(id) {
    return this.http.get(this.basePath + '/picture_origin/' + id);
  }

}
