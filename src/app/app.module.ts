import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestLogComponent } from './components/quest-log/quest-log.component';
import { AssetsEventImgPipe } from './pipes/assets-event-img.pipe';
import { EventCardComponent } from './components/quest-log/event-card/event-card.component';
import { MomentCardComponent } from './components/quest-log/moment-card/moment-card.component';
import { ObjectiveCardComponent } from './components/quest-log/objective-card/objective-card.component';
import { AssetsIconSvgPipe } from './pipes/assets-icon-svg.pipe';
import { MomentSortPipe } from './pipes/moment-sort.pipe';
import { MomentFormatPipe } from './pipes/moment-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestLogComponent,
    AssetsEventImgPipe,
    EventCardComponent,
    MomentCardComponent,
    ObjectiveCardComponent,
    AssetsIconSvgPipe,
    MomentSortPipe,
    MomentFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
