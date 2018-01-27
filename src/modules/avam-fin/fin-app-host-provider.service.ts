import { Injectable } from '@angular/core';
import { AppHostProvider, WinOptions, WinInfo, WindowProvider } from '$avam-core';
import { FinWindowProvider } from './fin-window-provider';


@Injectable()
export class FinAppHostProviderService extends AppHostProvider {
  private _finApp : fin.OpenFinApplication;

  constructor() {
    super();
    this._finApp = fin.desktop.Application.getCurrent();
  }

  get id() : string {
    return this._finApp.uuid;
  }

  createNewApp(options: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
  getCurrent(): any {
    return 'AppInstance';
  }
  getWindowOptions(url?: string, winInfo?: WinInfo, customData?: any): WinOptions {
    return {
      accelerator: {
        devtools: true,
        zoom: true,
        reload: false,
        reloadIgnoreCache: true
      },
      alwaysOnTop: false,
      autoShow: false,
      contextMenu: true,
      cornerRounding: {
        width: 0,
        height:0
      },
      customData,
      defaultCentered: false,
      defaultHeight: winInfo ? winInfo.height : 100,
      defaultWidth: winInfo ? winInfo.width : 100,
      defaultTop: winInfo ? winInfo.top : 50,
      defaultLeft: winInfo ? winInfo.left : 50,
      frame: false,
      hideOnClose: false,
      icon: '',
      maxHeight: winInfo ? winInfo.height : 100,
      maximizable: false,
      maxWidth: winInfo ? winInfo.width : 100,
      minHeight: 0,
      minimizable: true,
      minWidth: 0,
      name: winInfo ? winInfo.name : '',
      opacity: 1,
      resizable: true,
      // resizeRegion?: {
      //   size?: number;
      //   bottomRightCorner?: number;
      // };
      showTaskbarIcon: true,
      saveWindowState: false,
      taskbarIconGroup: winInfo ? winInfo.taskbarIconGroup : '',
      state: 'normal',
      url,
      waitForPageLoad: true
    }
  }
  createWindow(winInfo: WinInfo, url?: string) : Promise<WindowProvider> {
    return new Promise((resolve, reject)=> {
      const options = this.getWindowOptions(url,winInfo)
      FinWindowProvider.createWindow(options).then(winProvider=> {
        resolve(winProvider);
      }).catch(error=> reject(error));
    });
  }
}
