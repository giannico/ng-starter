import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view.component';

@NgModule({
  imports: [ SharedModule, HomeRoutingModule ],
  exports: [],
  declarations: [ HomeViewComponent ],
  providers: [],
})
export class HomeModule {}
