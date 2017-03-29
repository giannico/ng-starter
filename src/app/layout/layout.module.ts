import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { AppNavBarComponent } from './app-components/app-nav-bar.component';
import { PageNotFoundViewComponent } from './app-components/page-not-found-view.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    AppNavBarComponent, PageNotFoundViewComponent,
  ],
  exports: [
    AppNavBarComponent,
    PageNotFoundViewComponent,
  ]
})
export class LayoutModule {}
