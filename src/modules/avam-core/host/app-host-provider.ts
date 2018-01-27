import { WinOptions, WinInfo, AppOptions } from "../models";
import { WindowProvider } from "./window-provider";


export abstract class AppHostProvider {
  id: string;

  abstract createNewApp(options: AppOptions) : Promise<any>;
  abstract getCurrent() : any;
  abstract getWindowOptions(url?: string, winInfo?: WinInfo, customData?: any): WinOptions;
  abstract createWindow(winInfo: WinInfo, url?: string) : Promise<WindowProvider>;
}
