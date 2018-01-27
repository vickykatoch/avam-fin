import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvamCoreModule, AppHostProvider } from '$avam-core';
import { FinAppHostProviderService } from './fin-app-host-provider.service';



@NgModule({
  imports: [
    CommonModule,
    AvamCoreModule
  ],
  providers : [
    { provide : AppHostProvider, useClass : FinAppHostProviderService }
  ],
  declarations: []
})
export class AvamFinModule { }
