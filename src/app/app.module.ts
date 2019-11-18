import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestLogComponent } from './components/views/quest-log/quest-log.component';
import { AssetsEventImgPipe } from './pipes/assets-event-img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestLogComponent,
    AssetsEventImgPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
