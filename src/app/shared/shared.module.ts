import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SongCardComponent } from './components/song-card/song-card.component';

@NgModule({
    declarations: [
        SongCardComponent
    ],
    imports: [
        CommonModule,
        ButtonModule
    ],
    exports: [
        SongCardComponent,
    ]
})
export class SharedModule {}