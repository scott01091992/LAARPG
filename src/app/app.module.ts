import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestLogComponent } from './components/quest-log/quest-log.component';
import { AssetsEventImgPipe } from './pipes/assets-event-img.pipe';
import { EventCardComponent } from './components/quest-log/event-card/event-card.component';
import { QuoteCardComponent } from './components/quest-log/quote-card/quote-card.component';
import { MomentCardComponent } from './components/quest-log/moment-card/moment-card.component';
import { ObjectiveCardComponent } from './components/quest-log/objective-card/objective-card.component';
import { ConversationCardComponent } from './components/quest-log/conversation-card/conversation-card.component';
import { AssetsIconSvgPipe } from './pipes/assets-icon-svg.pipe';
import { MomentSortPipe } from './pipes/moment-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestLogComponent,
    AssetsEventImgPipe,
    EventCardComponent,
    QuoteCardComponent,
    MomentCardComponent,
    ObjectiveCardComponent,
    ConversationCardComponent,
    AssetsIconSvgPipe,
    MomentSortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
