import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '$avam-core';
import { FlyNotificationService } from '$avam-common-controls';

@Component({
  selector: 'system-depth-host',
  templateUrl: './system-depth-host.component.html',
  styleUrls: ['./system-depth-host.component.scss']
})
export class SystemDepthHostComponent extends ComponentBase {
  isDisabled: boolean = false;
  isDemo = false;

  constructor(private notificatinService: FlyNotificationService) {
    super()
  }

  ngOnInit() {
  }
  onDrag(value: number) {
    return value * 2;
  }
  onDragOver(val: number): boolean {
    // console.log(val);
    return true;
  }
  onClick(): void {
    this.notificatinService.setTarget(this.viewHost.provider.contentWindow.document.body);
    console.log(this.isDemo);
    this.isDisabled=!this.isDisabled;
    // this.notificatinService.success('Hi There', 'hello');
    // setTimeout(() => {
    //   this.notificatinService.warn('Hi There', 'hello');
    // }, 0);
    // setTimeout(() => {
    //   this.notificatinService.info('Hi There', 'hello');
    // }, 15);
    // setTimeout(() => {
    //   this.notificatinService.error('Hi There', 'hello');
    // }, 30);
  }
}
