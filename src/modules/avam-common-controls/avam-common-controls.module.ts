import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvamWindowChromeComponent } from './avam-window-chrome/avam-window-chrome.component';
import { DraggableDirective, DropTargetDirective } from './drag-n-drop';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AvamWindowChromeComponent,
    DraggableDirective,
    DropTargetDirective
  ],
  exports : [
    AvamWindowChromeComponent,
    DraggableDirective,
    DropTargetDirective
  ]
})
export class AvamCommonControlsModule { }
