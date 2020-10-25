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

  /** The carousel breakpoints for responsiveness */
  public carouselBreakpoints: any;

  constructor(private songService: SongService,
              private songPlayerService: SongPlayerService) { }

  ngOnInit(): void {
    this.registerGetTopSongs();
    this.setCarouselBreakpoints();
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

  private setCarouselBreakpoints(): void {
    this.carouselBreakpoints = [
      {
        breakpoint: '1920px',
        numVisible: 7,
        numScroll: 7,
      },
      {
        breakpoint: '1800px',
        numVisible: 6,
        numScroll: 6,
      },
      {
        breakpoint: '1650px',
        numVisible: 5,
        numScroll: 5,
      },
      {
        breakpoint: '1390px',
        numVisible: 4,
        numScroll: 4,
      },
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '560px',
          numVisible: 2,
          numScroll: 2
      }
  ];
  }
}
