import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentManagerService, TemplateStoreService } from './controls';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    ComponentManagerService,
    TemplateStoreService
  ]
})
export class AvamCoreModule { }
