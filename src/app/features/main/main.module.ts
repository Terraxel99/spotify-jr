import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  declarations: [MainComponent, AudioPlayerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
