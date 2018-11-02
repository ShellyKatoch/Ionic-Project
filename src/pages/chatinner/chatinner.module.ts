import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatinnerPage } from './chatinner';

@NgModule({
  declarations: [
    ChatinnerPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatinnerPage),
  ],
})
export class ChatinnerPageModule {}
