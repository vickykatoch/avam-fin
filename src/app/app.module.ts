import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AvamCommonControlsModule } from '$avam-common-controls';
import { AvamCoreModule } from '$avam-core';
import { AvamFinModule } from '$avam-fin';
import { SystemDepthHostComponent } from './components/system-depth-host/system-depth-host.component';
import { AppTemplateStoreComponent } from './components/app-template-store/app-template-store.component';




@NgModule({
  declarations: [
    AppComponent,
    SystemDepthHostComponent,
    AppTemplateStoreComponent
  ],
  imports: [
    BrowserModule,
    AvamCoreModule,
    AvamCommonControlsModule,
    AvamFinModule
  ],
  providers: [],
  entryComponents : [
    SystemDepthHostComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
