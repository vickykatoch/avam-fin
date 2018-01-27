import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { WinMessage, WinOptions } from "../models";


export abstract class WindowProvider {
  title : string;
  protected notifier = new Subject<WinMessage>();
  messages$ : Observable<WinMessage> = this.notifier.asObservable();

  constructor(protected provider: any) {

  }
  abstract moveTo(top?: number, left?: number) : void;
  abstract close(force?: boolean): void;
  abstract show() : void;
  abstract hide() : void;
}
