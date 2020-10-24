import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument
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
    return this.songsCollection.valueChanges();
  }
}
