import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction
} from '@angular/fire/firestore';
import { Song } from '@app/core/models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songsCollection: AngularFirestoreCollection<Song>;

  constructor(private store: AngularFirestore) {
    this.songsCollection = store.collection('songs');
  } 

  /** Gets observable for all songs */
  public getTopSongs(): Observable<Song[]> {
    return this.songsCollection.snapshotChanges()
      .pipe(map((actions) => actions.map(this.documentToDomainObject)));
  }

  documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }
}
