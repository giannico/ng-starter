import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../../../data';

@Component({
  selector: 'user-table',
  templateUrl: 'user-table.component.html'
})

export class UserTableComponent implements OnInit {
  @Input() users: Array<User>;
  @Input() selectedUser: User;
  @Output() rowClick: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  ngOnInit() { }

  onRowClick(user: User) {
    this.rowClick.emit(user);
  }
}
