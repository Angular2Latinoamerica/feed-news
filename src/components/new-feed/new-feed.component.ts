import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'new-feed',
  templateUrl: './new-feed.component.html'
})
export class NewFeedComponent {

  message:String = "";
  feed;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.feed = this.db.list("/feed");
  }

  onNewFeed() {
    console.log("New Feed");
    this.feed.push({
      user: this.auth.auth.currentUser.email,
      message: this.message,
      date: new Date()
    }).then(result => {
      console.log(result);
      this.message = "";
    }).catch(err => {
      console.log(err);
      this.message = "";
    });
  }

}