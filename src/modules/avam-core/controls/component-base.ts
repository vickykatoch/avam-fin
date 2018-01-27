import { WindowProvider } from "../host";
import { ComponentState } from "../models";
import { TemplateRef } from "@angular/core";

export interface IComponentBase {
  viewHost : WindowProvider;
  title :string;
  state : ComponentState;
  template?: TemplateRef<any>;

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
  template?: TemplateRef<any>;

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
