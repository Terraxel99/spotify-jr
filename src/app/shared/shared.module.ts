import { NgModule } from "@angular/core";
import { SongCardComponent } from './components/song-card/song-card.component';

@NgModule({
    declarations: [
        SongCardComponent
    ],
    exports: [
        SongCardComponent,
    ]
})
export class SharedModule {}