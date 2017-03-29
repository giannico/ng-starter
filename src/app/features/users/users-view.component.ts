import { Component, OnInit } from '@angular/core';

import { Logger, Notifier } from '../../core';
import { User, UsersDataService } from '../../data';

@Component({
  selector: 'users-view',
  templateUrl: 'users-view.component.html'
})
export class UsersViewComponent implements OnInit {
  locations: Array<any>;

  users: Array<User>;
  selectedUser: User;

  constructor(
    private logger: Logger,
    private notifier: Notifier,
    private usersDataService: UsersDataService
  ) {}

  ngOnInit() {
    this.locations = [
      { value: 'NJ', description: 'New Jersey' },
      { value: 'NY', description: 'New York' }
    ];

    this.refreshUsers();
  }

  handleRowClick(user: User) {
    this.logger.info('Row clicked', user);
    this.selectedUser = user;
  }

  handleFormCreate(user: User) {
    this.logger.info('User create submitted', user);

    this.usersDataService
      .createUser(user)
      .subscribe(() => {
        this.logger.info('User create processed', user);
        this.notifier.info('User was successfully created.');

        this.refreshUsers();
      });
  }

  handleFormUpdate(user: User) {
    this.logger.info('User update submitted', user);

    this.usersDataService
      .updateUser(user)
      .subscribe(() => {
        this.logger.info('User update processed', user);
        this.notifier.info('User was successfully updated.');

        this.refreshUsers();
      });
  }

  handleFormDelete(user: User) {
    this.logger.info('User deleted submitted', user);

    this.usersDataService
      .deleteUser(user)
      .subscribe(() => {
        this.logger.info('User delete processed', user);
        this.notifier.info('User was successfully deleted.');

        this.refreshUsers();
      });
  }

  private refreshUsers() {
    this.usersDataService
      .getUsers()
      .subscribe((users: Array<User>) => {
        this.logger.info('Got the users', users);
        this.users = users;
        this.selectedUser = null;
      });
  }
}
