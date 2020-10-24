import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SliderModule } from 'primeng/slider';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
  declarations: [
    MainComponent, AudioPlayerComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    FormsModule,
    ButtonModule,
    SliderModule,
    CarouselModule,
  ]
})
export class MainModule { }
