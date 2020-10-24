import { Component, OnInit } from '@angular/core';
import { Song } from '@app/core/models/song';
import { SongPlayerService, SongService } from '@app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  /** The list of top songs */
  public topSongs: Song[] = [];

  constructor(private songService: SongService,
              private songPlayerService: SongPlayerService) { }

  ngOnInit(): void {
    this.registerGetTopSongs();
  }

  /** Send a request to the service to play the given song */
  public playSong(song: Song): void {
    this.songPlayerService.playSong(song);
  }

  /** Gets the top songs */
  private registerGetTopSongs(): void {
    this.songService.getTopSongs()
      .subscribe((songs) => {
        this.topSongs = songs;
      });
  }
}
