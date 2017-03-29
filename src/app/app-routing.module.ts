import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTER_CONFIGURATION } from '@angular/router';

import { SelectivePreloadingStrategy } from './core';
import { PageNotFoundViewComponent } from './layout';

import { EnvironmentConfig } from '../environments/environment.config';

const routes: Routes = [
  // lazy routes
  {
    path: 'about',
    loadChildren: 'app/features/+about/about.module#AboutModule',
    data: { preload: true }
  },
  {
    path: '404',
    component: PageNotFoundViewComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
