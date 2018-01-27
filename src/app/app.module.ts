import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AvamWindowChromeModule } from '$avam-window-chrome';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AvamWindowChromeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
