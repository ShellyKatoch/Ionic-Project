import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { UnilistPage } from '../pages/unilist/unilist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { CalendarPage } from '../pages/calendar/calendar';
import { VideoPage } from '../pages/video/video';
import { ChatPage } from '../pages/chat/chat';
import { ChatinnerPage } from '../pages/chatinner/chatinner';
import { NotesPage } from '../pages/notes/notes';
import { PackagesPage } from '../pages/packages/packages';
import { PaymentPage } from '../pages/payment/payment';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    SignupPage,
    ProfilePage,
    CalendarPage,
    VideoPage,
    ChatPage,
    ChatinnerPage,
    NotesPage,
    PackagesPage,
    UnilistPage,
    PaymentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    SignupPage,
    ProfilePage,
    CalendarPage,
    VideoPage,
    ChatPage,
    ChatinnerPage,
    NotesPage,
    PackagesPage,
    UnilistPage,
    PaymentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
