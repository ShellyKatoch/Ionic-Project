import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnilistPage } from './unilist';

@NgModule({
  declarations: [
    UnilistPage,
  ],
  imports: [
    IonicPageModule.forChild(UnilistPage),
  ],
})
export class UnilistPageModule {}
