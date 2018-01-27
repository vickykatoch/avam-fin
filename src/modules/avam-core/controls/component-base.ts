import { WindowProvider } from "../host";
import { ComponentState } from "../models";

export interface IComponentBase {
  viewHost : WindowProvider;
  title :string;
  state : ComponentState;


  dispose() : void;

  setState(state: any) : void;
  getState() : ComponentState;
  applyState() : void;
  flash() : void;
}

export abstract class ComponentBase implements IComponentBase {

  viewHost: WindowProvider;
  title: string;
  state: ComponentState;

  setState(state: any) : void {

  }
  getState() : ComponentState {
    return this.state;
  }
  applyState() : void {
  }
  flash() : void {
  }
  dispose(): void {

  }

  protected onDispose(): void {
  }

}
