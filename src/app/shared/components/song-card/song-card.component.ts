import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from '@app/core/models/song';
import { SongPlayerService } from '@app/core/services';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
})
export class SongCardComponent implements OnInit {

  /** The song */
  @Input() song: Song;
  /** The ID of the current song in the song player */
  public currentSongId: string;
  /** Whether the music is paused or not */
  public isMusicPaused = false;

  /** Should emit an event when overlay is clicked */
  @Output() public overlayClicked: EventEmitter<void> = new EventEmitter();
  /** Should emit an event when title is clicked */
  public titleClicked: EventEmitter<void> = new EventEmitter();

  /** Whether the current song is the song of this card */
  get currentSongIsThisSong(): boolean {
    if (!this.song || !this.currentSongId || !this.currentSongId.length) {
      return false;
    }

    return this.song.id === this.currentSongId;
  }

  constructor(private songPlayerService: SongPlayerService) { }

  ngOnInit(): void {
    this.registerNewSongEvent();
    this.registerPlayerChangeStateEvent();
  }

  /** Called to emit an event when the image's overlay has been clicked */
  public onOverlayClick(): void {
    this.overlayClicked.emit();
  }

  /** Called to emit an event when the title of the song has been clicked */
  public onTitleClick(): void {
    this.titleClicked.emit();
  }

  /** Registers the event to keep track of the current song in the song player */
  private registerNewSongEvent(): void {
    this.songPlayerService.currentSong
      .subscribe((newSong) => {
        if (!newSong) {
          return;
        }

        this.currentSongId = newSong.id;
      });
  }

  /** Registers the event to keep track of the song player's state (paused/playing) */
  private registerPlayerChangeStateEvent(): void {
    this.songPlayerService.isPaused
      .subscribe((isPlayerPaused) => {
        this.isMusicPaused = isPlayerPaused;
      });
  }
}
