import { storage } from 'firebase';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService, SongPlayerService } from '@app/core/services';
import { Song } from '@app/core/models/song';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
})
export class AudioPlayerComponent implements OnInit, OnDestroy   {

  /** Whether the screen has a mobile size or not */
  public isMobile = false;

  /** The audio sound player */
  public audio: HTMLAudioElement = new Audio();
  /** The current song */
  public currentSong: Song;
  /** The volume on the slider */
  public sliderVolume: number;

  /** The firebase storage reference */
  private storageReference = storage().ref();

  constructor(private songPlayerService: SongPlayerService,
              private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.sliderVolume = 50;
    this.audio.volume = this.sliderVolume / 100;

    this.registerNewSongRequestedEvent();
    this.registerMobileEvent();
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = undefined;
    }
  }

  /** Skips the current song for the next song */
  public nextSong(): void {
    console.log('go to next');
  }

  /** Goes to the previous song or to the begin of the current song */
  public previousSong(): void {
    console.log('go to previous');
  }

  public changeVolume(event: any): void {
    this.audio.volume = event.value / 100;
  }

  /** Plays the current song if paused, and pauses if currently playing */
  public togglePlay(): void {
    if (!this.audio || !this.audio.src) {
      return;
    }

    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  /** Registers the action to do when a new song is requested by the service */
  private registerNewSongRequestedEvent(): void {
    this.songPlayerService.onSongRequested
      .subscribe((song) => {
        if (!song) {
          return;
        }

        this.currentSong = song;
        this.audio.src = song.song;
        this.audio.play();
      });
  }

  /** Register the event to keep the mobile state up to date */
  private registerMobileEvent(): void {
    this.responsiveService.isMobile
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
      });
  }
}
