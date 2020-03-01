import { InjectionToken } from '@angular/core';


// Although the ApplicationConfig interface plays no role in dependency injection, 
// it supports typing of the configuration object within the class.
export interface ApplicationConfig {
  appName: string;
  apiEndpoint: string;
  adapter: string;
}

// Configuration values for our app
export var APP_CONFIG: ApplicationConfig = {
  appName: 'Tg2',
  apiEndpoint: 'http://localhost:8080',
  adapter: 'idb',
  //adapter: 'cordova-sqlite',
};

// Create a config token to avoid naming conflicts
export var APP_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');

