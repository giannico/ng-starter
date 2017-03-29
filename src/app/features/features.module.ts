import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    HomeModule,
    UsersModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class FeaturesModule { }
