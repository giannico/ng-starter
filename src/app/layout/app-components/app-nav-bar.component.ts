import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Environment } from '../../core';
import { UserProfileModalComponent } from '../../shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'app-nav-bar.component.html'
})
export class AppNavBarComponent  {
  @ViewChild(UserProfileModalComponent) public userProfileModal: UserProfileModalComponent;

  isNavbarCollapsed = true;

  constructor(
    public environment: Environment
  ) {}

  showUserProfileModal(): void {
    // async lookup of user name, then
    this.userProfileModal.show('Andre');
  }
}
