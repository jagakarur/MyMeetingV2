import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { MeetingModel } from '../meetingHome/meetingModel';

@Component({
  selector: 'page-meetingadd',
  templateUrl: 'meetingadd.html'
})
export class MeetingAdd {
  meetingForm = {
    meetingName: '',
    meetingNumber: ''
  };


  public meeting: Array<Object>;

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private sqlite: SQLite) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => this.refresh(db))
        .catch((error) => console.log(error))
    });

  }


  //public meetingForm : MeetingModel;


  public addListItem() {
    console.log("Clicked Save Buttom!!!");

    console.log(this.meetingForm.meetingName);
  }

  public refresh(dbLocal: SQLiteObject) {
    alert(dbLocal);
    dbLocal.executeSql("SELECT * FROM meeting_tab", []).then((data) => {
      this.meeting = [];
      alert(data.row);
      if (data.row.lenth > 0) {
        for (var i = 0; i < data.row.lenth; i++) {
          this.meeting.push({
            meetingIndex: data.row.item(i).id,
            meetingName: data.row.item(i).meeting_name
          });
        }
      }
    }

    )
      .catch((error) => console.log(error))
  }
}
