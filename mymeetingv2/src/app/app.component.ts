import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { MeetingAdd } from '../pages/meetingAdd/meetingadd';
import { MeetingList } from '../pages/meetingList/meetinglist';
import { MeetingHome } from '../pages/meetingHome/meetinghome';


@Component({
  templateUrl: 'app.html'
})
export class MyAppComp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MeetingHome;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private sqlite: SQLite) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Add Meeting', component: MeetingAdd },
      { title: 'Meeting summary', component: MeetingList }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

      //create db 
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql("CREATE TABLE IF NOT EXISTS meeting_tab(id INTEGER PRIMARY KEY AUTOINCREMENT, meeting_name TEXT, meeting_des TEXT, meeting_call_number TEXT, meeting_number TEXT , meeting_time TEXT , meeting_pin TEXT)", {})
          .then((data) => console.log("TABLE CREATED: ", data))
          .catch((error) => console.log(error))
      }).catch(e => console.log(e));
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
