import { WindowProvider, WinOptions } from "$avam-core";


export class FinWindowProvider extends WindowProvider {

  constructor(provider : fin.OpenFinWindow) {
    super(provider);
  }

  //#region Base Overrides

  moveTo(top?: number, left?: number): void {
    this.provider.moveTo(top,left);
  }
  close(force?: boolean): void {
    this.provider.close(force,()=> {
      console.log('Window Closed')
    }, error=> {
      console.error('Window Close Error : ', error);
    });
  }
  show() : void {
    (this.provider as fin.OpenFinWindow).show(true);
  }
  hide() : void {
    (this.provider as fin.OpenFinWindow).hide();
  }
  //#endregion


  //#region Static Methods
  static createWindow(option: WinOptions): Promise<FinWindowProvider> {
    return new Promise<FinWindowProvider>((resolve, reject)=> {
      const finWindow = new fin.desktop.Window(option,()=> {
        const winProvider = new FinWindowProvider(finWindow);
        resolve(winProvider);
      },error=> {
        reject(error);
      });
    });
  }
  //#endregion
}
