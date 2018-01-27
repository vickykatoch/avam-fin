import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { IComponentBase } from './component-base';
import { AppHostProvider } from '../host';
import { ComponentBuilder } from './component-builder';
import { ComponentDefinition, WinInfo } from '../models';
import { Utils } from '$avam-utils';



@Injectable()
export class ComponentManagerService {
  private components = new Map<string, any>();
  private stylesMap = new Map<string, NodeListOf<HTMLStyleElement>>();
  private componentsDefinitionMap = new Map<string, ComponentDefinition>();

  constructor(private injector: Injector, private appHostProvider: AppHostProvider) { }

  createPopupComponent(componentName: string, vc: ViewContainerRef, winInfo: WinInfo): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      Utils.rejectPromiseIfTrue(Utils.isStringNullorEmpty(componentName), 'Empty/Invalid component name', reject);
      Utils.rejectPromiseIfTrue(!this.componentsDefinitionMap.has(componentName), `Component : [${componentName}] doesn't exist in the components definition repository`, reject);
      this.appHostProvider.createWindow(winInfo, 'http://localhost:4200/popup.html')
        .then(winHost => {
          const compDef = this.componentsDefinitionMap.get(componentName);
          const component = ComponentBuilder.build(vc, compDef, this.injector);
          winHost.provider.contentWindow.document.body.appendChild(component.location.nativeElement);
          this.findStyles(compDef.name).then(styles => {
            debugger;
            this.appendStyles(winHost.provider, styles);
            winHost.show();
            resolve(true);
          }).catch(error => reject(error));
        }).catch(error => reject(error));
    });

  }
  registerComponent(name: string, type: any, height?: number, width?: number) {
    this.componentsDefinitionMap.set(name,{
      name,type,height,width
    });
  }


  private findStyles(compName: string): Promise<NodeListOf<HTMLStyleElement>> {
    return new Promise<NodeListOf<HTMLStyleElement>>((resolve, reject) => {
      if (this.stylesMap.has(compName)) {
        resolve(this.stylesMap.get(compName));
      } else {
        setTimeout(() => {
          const styles = document.head.getElementsByTagName('style');
          resolve(styles);
        }, 0);
      }
    });
  }
  private appendStyles(host: any, styles: NodeListOf<HTMLStyleElement>) {
    if (styles) {
      for (let i = 0; i < styles.length; i++) {
        const style = styles[i].cloneNode(true);
        host.contentWindow.document.head.appendChild(style);
      }
    }
  }

}
