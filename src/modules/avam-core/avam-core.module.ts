import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentManagerService, TemplateStoreService } from './controls';
import { ThemeService } from './services/theme.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    ComponentManagerService,
    TemplateStoreService,
    ThemeService
  ]
})
export class AvamCoreModule { }
