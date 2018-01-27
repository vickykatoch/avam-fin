import { Component } from '@angular/core';
import { AppHostProvider, WinInfo } from '$avam-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Openfin Playground';
  constructor(private appHostProvider: AppHostProvider){}

  onCreateWindow() {
    const winInfo :  WinInfo = {
      name : `WINDOW-${Math.floor(Math.random() * 100000)}`,
      left : 300,
      top : 300,
      height : 500,
      width : 400
    };
    this.appHostProvider.createWindow(winInfo,'http://localhost:4200/popup.html').then(win=> {
      console.log('Window Created Successfully');
      win.show();
    });
  }
}
