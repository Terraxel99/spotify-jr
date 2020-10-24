import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongPlayerService {

  /** Event called when a new song is requested */
  public onSongRequested: BehaviorSubject<Song> = new BehaviorSubject(null);

  constructor() { }

  /** Plays a song */
  public playSong(source: Song): void {
    this.onSongRequested.next(source);
  }
}
