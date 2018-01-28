import { Directive, HostBinding, Input, HostListener } from '@angular/core';

export interface DraggableOptions {
  zone?: string;
  data?: any;
}

@Directive({
  selector: '[avamDraggable]'
})
export class DraggableDirective {
  private options: DraggableOptions = {};
  @Input() dragStart : any;


  constructor() { }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }
  @Input()
  set avamDraggable(options: DraggableOptions) {
      if (options) {
          this.options = options;
      }
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
      const x = this.dragStart;
      event.dataTransfer.setData('Text', JSON.stringify(x));

  }
}
