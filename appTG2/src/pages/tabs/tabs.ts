import { Component } from '@angular/core';

import { ConnectionPage } from '../connection/connection';
import { ApptgPage } from '../apptg/apptg';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  Connection = ConnectionPage;
  Apptg = ApptgPage;
 
  constructor() {
  }
}
