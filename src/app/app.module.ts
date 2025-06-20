import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardRedComponent } from './card-red/card-red.component';
import { CardPurpleComponent } from './card-purple/card-purple.component';

@NgModule({
  declarations: [
    AppComponent,
    CardRedComponent,
    CardPurpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
