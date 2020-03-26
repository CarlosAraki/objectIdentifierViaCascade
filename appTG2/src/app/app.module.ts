import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ApptgPage } from '../pages/apptg/apptg';
import { ConnectionPage } from '../pages/connection/connection';
import { APP_CONFIG_TOKEN, APP_CONFIG } from './app-config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { HttpClientModule } from '@angular/common/http';
import { PictureshostProvider } from '../providers/pictureshost/pictureshost';
import { LoginsProvider } from '../providers/logins/logins';
import { Camera } from '@ionic-native/camera';
import { PicturesProvider } from '../providers/pictures/pictures';
import { ConnectionTestProvider } from '../providers/connection-test/connection-test';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ApptgPage,
    ConnectionPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ApptgPage,
    ConnectionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG},
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PictureshostProvider,
    LoginsProvider,
    PicturesProvider,
    ConnectionTestProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
