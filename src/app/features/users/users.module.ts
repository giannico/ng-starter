import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared';

import { UsersRoutingModule } from './users-routing.module';
import { UsersViewComponent } from './users-view.component';

// Private components
import { UserFormComponent } from './_components/user-form.component';
import { UserTableComponent } from './_components/user-table.component';

@NgModule({
  imports: [ SharedModule, ReactiveFormsModule, UsersRoutingModule ],
  declarations: [ UsersViewComponent, UserFormComponent, UserTableComponent ],
  providers: [],
  exports: [],
})
export class UsersModule {}
