import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { AboutRoutingModule } from './about-routing.module';
import { AboutViewComponent } from './about-view.component';

@NgModule({
  imports: [ SharedModule, AboutRoutingModule ],
  exports: [],
  declarations: [ AboutViewComponent ],
  providers: [],
})
export class AboutModule {}
