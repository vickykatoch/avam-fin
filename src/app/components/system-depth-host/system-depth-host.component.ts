import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '$avam-core';

@Component({
  selector: 'system-depth-host',
  templateUrl: './system-depth-host.component.html',
  styleUrls: ['./system-depth-host.component.scss']
})
export class SystemDepthHostComponent extends ComponentBase {

  constructor() {
    super()
  }

  ngOnInit() {
  }
  onDrag(value : number) {
    return value*2;
  }
  onDragOver(val: number) : boolean {
    console.log(val);
    return true;
  }
}
