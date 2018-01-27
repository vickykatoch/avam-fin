import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvamWindowChromeComponent } from './avam-window-chrome/avam-window-chrome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AvamWindowChromeComponent
  ],
  exports : [
    AvamWindowChromeComponent
  ]
})
export class AvamCommonControlsModule { }
