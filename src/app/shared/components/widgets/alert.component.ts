import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <div class="alert" [ngClass]="this.type">
      <ng-content></ng-content>
    </div>
    `
})
export class AlertComponent implements OnInit {
  @Input() type;

  constructor() {}

  ngOnInit() {
    if (this.type) {
      this.type = `alert-${this.type}`;
    } else {
      this.type = 'alert-default';
    }
  }
}
