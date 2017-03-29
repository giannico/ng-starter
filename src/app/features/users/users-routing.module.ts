import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersViewComponent } from './users-view.component';

const routes: Routes = [
  { path: 'users', component: UsersViewComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UsersRoutingModule { }
