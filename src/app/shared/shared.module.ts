import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ng2-bootstrap/collapse';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { ModalModule } from 'ng2-bootstrap/modal';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// Modals
import { UserProfileModalComponent } from './modals/user-profile-modal.component';

// Widgets
import { AlertComponent } from './components/widgets/alert.component';
import { PanelComponent } from './components/widgets/panel.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule, TooltipModule, ModalModule, DropdownModule
  ],
  declarations: [
    // UserProfileModalContent,
    AlertComponent, PanelComponent,

    UserProfileModalComponent,
  ],
  exports: [
    CommonModule,

    CollapseModule, TooltipModule, ModalModule, DropdownModule,

    AlertComponent, PanelComponent, UserProfileModalComponent
  ]
})
export class SharedModule {}
