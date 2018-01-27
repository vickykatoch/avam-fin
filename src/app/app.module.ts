import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AvamCommonControlsModule } from '$avam-common-controls';
import { AvamCoreModule } from '$avam-core';
import { AvamFinModule } from '$avam-fin';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AvamCoreModule,
    AvamCommonControlsModule,
    AvamFinModule
  ],
  providers: [],
  entryComponents : [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
