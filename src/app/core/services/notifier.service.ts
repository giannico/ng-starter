import { Injectable } from '@angular/core';
import { ToasterConfig, ToasterService,  } from 'angular2-toaster';

@Injectable()
export class Notifier {

  constructor(private toasterService: ToasterService) {}

  info(body: string, title: string = null) {
    this.toasterService.pop('info', body, title);
  }

  warning(body: string , title: string = null) {
    this.toasterService.pop('warning', body, title);
  }

  error(body: string, title: string = null) {
    this.toasterService.pop('error', body, title);
  }

  success(body: string, title: string = null) {
    this.toasterService.pop('success', body, title);
  }
}
