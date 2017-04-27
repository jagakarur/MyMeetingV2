import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//import { FormsModule } from '@angular/forms';
import { MyAppComp } from './app.component';
import { MeetingAdd } from '../pages/meetingAdd/meetingadd';
import { MeetingList } from '../pages/meetingList/meetinglist';
import { MeetingHome } from '../pages/meetingHome/meetinghome';
//import { MeetingModel } from '../pages/meetingHome/meetingModel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
//import { SQLite, SQLiteObject} from '@inoic-native/sqlite';

@NgModule({
  declarations: [
    MyAppComp,
    MeetingAdd,
    MeetingList,
    MeetingHome
  ],
  imports: [
   BrowserModule,  // New in ionic 3
   HttpModule,  // New in ionic 3
   IonicModule.forRoot(MyAppComp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComp,
    MeetingAdd,
    MeetingList,
    MeetingHome
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
