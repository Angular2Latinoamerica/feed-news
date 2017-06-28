import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent {

  feed: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.feed = this.db.list("/feed");
  }

}