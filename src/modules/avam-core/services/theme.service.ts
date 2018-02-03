import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  private currentTheme = 'darkly';

  constructor() {

  }

  setTheme(themeName: string) {
    const linkElems = document.head.getElementsByTagName('link');
    for (let index = 0; index < linkElems.length; index++) {
      const linkElem : HTMLLinkElement = linkElems[index];
      if(linkElem.title === themeName) {
        linkElem.disabled = false;
      } else {
        linkElem.disabled = true;
      }
    }
  }
}
