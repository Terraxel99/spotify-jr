import { Component, OnInit } from '@angular/core';
import { Song } from '@app/core/models/song';
import { SongPlayerService, SongService } from '@app/core/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
