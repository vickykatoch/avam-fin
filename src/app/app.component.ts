import { Component, ViewContainerRef } from '@angular/core';
import { AppHostProvider, WinInfo, ComponentManagerService, ThemeService } from '$avam-core';
import { SystemDepthHostComponent } from './components/system-depth-host/system-depth-host.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Openfin Playground';
  constructor(private componentManagerService: ComponentManagerService, 
    private themeService : ThemeService,
      private vc : ViewContainerRef){
    this.componentManagerService.registerComponent('SYSTEM-DEPTH-HOST',SystemDepthHostComponent, 400,300);
  }

  onCreateWindow() {
    const winInfo :  WinInfo = {
      name : `WINDOW-${Math.floor(Math.random() * 100000)}`,
      left : 300,
      top : 300,
      height : 500,
      width : 400
    };
    this.componentManagerService.createPopupComponent('SYSTEM-DEPTH-HOST', this.vc,winInfo).then(isTrue=> console.log(isTrue));
  }
  selectTheme(themeName: string) {
    this.themeService.setTheme(themeName);
  }
}
