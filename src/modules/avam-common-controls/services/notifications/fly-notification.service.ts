import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable()
export class FlyNotificationService {

  constructor() {
    toastr.options.closeButton = true;
    toastr.options["closeButton"] = true;
    toastr.options["newestOnTop"] = true;
    toastr.options["progressBar"] = true;
    toastr.options["positionClass"] = "toast-top-right";
    toastr.options["preventDuplicates"] = false;
    toastr.options["showDuration"] = 300;
    toastr.options["hideDuration"] = 1000;
    toastr.options["timeOut"] = 5000;
    toastr.options["extendedTimeOut"] = 1000;
    toastr.options["showEasing"] = "swing";
    toastr.options["hideEasing"] = "linear";
    toastr.options["showMethod"] = "fadeIn";
    toastr.options["hideMethod"] = "fadeOut";
  }
  setTarget(target: any) {
    toastr.options["target"]=target;
  }
  success(message: string, title?: string) {
    toastr.success(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  warn(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
