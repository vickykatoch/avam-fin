import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvamWindowChromeComponent } from './avam-window-chrome/avam-window-chrome.component';
import { DraggableDirective, DropTargetDirective } from './drag-n-drop';
import { FlyNotificationService } from './services';
import { CheckboxComponent } from './avam-checkbox/avam-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AvamWindowChromeComponent,
    DraggableDirective,
    DropTargetDirective,
    CheckboxComponent
  ],
  exports : [
    AvamWindowChromeComponent,
    DraggableDirective,
    DropTargetDirective,
    CheckboxComponent
  ],
  providers : [
    FlyNotificationService
  ]
})
export class AvamCommonControlsModule { }
