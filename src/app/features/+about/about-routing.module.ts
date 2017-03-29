import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutViewComponent } from './about-view.component';

const routes: Routes = [
  { path: '', component: AboutViewComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AboutRoutingModule { }
