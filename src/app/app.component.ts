import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { CalendarPage } from '../pages/calendar/calendar';
import { VideoPage } from '../pages/video/video';
import { UnilistPage } from '../pages/unilist/unilist';
import { ChatPage } from '../pages/chat/chat';
import { ChatinnerPage } from '../pages/chatinner/chatinner';
import { NotesPage } from '../pages/notes/notes';
import { PackagesPage } from '../pages/packages/packages';
import { PaymentPage } from '../pages/payment/payment';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'login', component: LoginPage },
      { title: 'List', component: ListPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Calendar', component: CalendarPage },
      { title: 'Video', component: VideoPage },
      { title: 'Unilist', component: UnilistPage },
      { title: 'Chat', component: ChatPage },
      { title: 'Chatinner', component: ChatinnerPage }, 
      { title: 'Notes', component: NotesPage },
      { title: 'Packages', component: PackagesPage },
      { title: ' Payment', component:  PaymentPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
