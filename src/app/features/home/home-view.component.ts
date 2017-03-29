import { Component, OnInit } from '@angular/core';

import { Logger, Notifier } from '../../core';

@Component({
  selector: 'home-view',
  templateUrl: 'home-view.component.html'
})
export class HomeViewComponent implements OnInit {

  constructor(
    private notifier: Notifier,
    private logger: Logger
  ) {}

  ngOnInit() {}

  showSuccessNotification() {
    this.logger.log('This is a log message');
    this.notifier.success('This is a success toast.');
  }

  showErrorNotification() {
    this.logger.error('This is a test');
    this.notifier.error('This is an error toast.');
  }

}
