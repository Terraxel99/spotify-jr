import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongPlayerService {

  /** Event called when a new song is requested */
  public onSongRequested: BehaviorSubject<Song> = new BehaviorSubject(null);
  /** The current song */
  public currentSong: BehaviorSubject<Song> = new BehaviorSubject(null);
  /** Whether the player is paused or not */
  public isPaused: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

  /** Plays a song */
  public playSong(song: Song): void {
    this.onSongRequested.next(song);
  }

  /** Sets the current playing song */
  public setCurrentSong(song: Song): void {
    this.currentSong.next(song);
  }

  /** Sets the state of the current player (paused/playing) */
  public setPlayerState(isPaused: boolean): void {
    this.isPaused.next(isPaused);
  }
}
