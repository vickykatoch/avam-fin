import { Injectable, TemplateRef } from '@angular/core';
import {  } from '@angular/core';

@Injectable()
export class TemplateStoreService {
  private componentsTemplatesMap = new Map<string,Map<string,TemplateRef<any>>>()


  constructor() { }

  add(componentName: string, templateName: string, template: TemplateRef<any>) {
    if(!this.componentsTemplatesMap.has(componentName)) {
      this.componentsTemplatesMap.set(componentName,new Map<string,TemplateRef<any>>());
    }
    this.componentsTemplatesMap.get(componentName).set(templateName, template);
  }
  get(componentName: string, templateName: string) {
    if(!this.componentsTemplatesMap.has(componentName)) {
      if(this.componentsTemplatesMap.get(componentName).has(templateName)) {
        return this.componentsTemplatesMap.get(componentName).get(templateName);
      }
    }
    throw new Error(`Template : [${templateName}] for component type : [${componentName}] doesn't exist`);
  }
}
