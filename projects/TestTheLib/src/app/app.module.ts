import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LibModule} from '../../../lib/src/lib/lib.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
