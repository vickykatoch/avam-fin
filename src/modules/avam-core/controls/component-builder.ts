import { IComponentBase } from './component-base';
import { ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { TemplateStoreService } from './template-store.service';
import { ComponentDefinition } from '../models';




export class ComponentBuilder {

  static build(vc: ViewContainerRef, componentDefinition: ComponentDefinition, injector: Injector, templateName?: string): any {
    const resolver = injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
    const factory = resolver.resolveComponentFactory(componentDefinition.type);
    const comp = vc.createComponent(factory);
    if (templateName) {
      const templateStore = injector.get(TemplateStoreService) as TemplateStoreService;
      comp['template'] = templateStore.get(componentDefinition.name, templateName);
    }
    return comp;
  }

}
