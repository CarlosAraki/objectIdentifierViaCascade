import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComparePage } from './compare';

@NgModule({
  declarations: [
    ComparePage,
  ],
  imports: [
    IonicPageModule.forChild(ComparePage),
  ],
})
export class ComparePageModule {}
