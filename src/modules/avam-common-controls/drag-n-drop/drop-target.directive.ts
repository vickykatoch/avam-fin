import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[avamDropTarget]'
})
export class DropTargetDirective {
  private options: any;
  @Input() dragOver : boolean;

  constructor() { }

  @Input()
  set avamDropTarget(options: any) {
    if (options) {
      this.options = options;
    }
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(evt) {
    if(this.dragOver) {
      evt.preventDefault();
    }
  }

}
