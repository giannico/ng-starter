import { Component, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'user-profile-modal',
  templateUrl: 'user-profile-modal.component.html'
})
export class UserProfileModalComponent {
  @ViewChild('userProfileModal') public userProfileModal: ModalDirective;

  firstName: string;

  public show(firstName: string): void {
    this.firstName = firstName;
    this.userProfileModal.show();
  }

  public hide(): void {
    this.userProfileModal.hide();
  }
}
