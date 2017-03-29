import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { DataModule } from './data';
import { FeaturesModule } from './features';
import { LayoutModule } from './layout';
import { SharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LogLevel } from './core';

import { environmentConfig } from '../environments/environment';

////////////////////

@NgModule({
  imports: [
    BrowserModule,

    CoreModule.forRoot(environmentConfig),
    DataModule.forRoot(),
    LayoutModule,
    SharedModule,

    FeaturesModule,

    AppRoutingModule, // it's important that this is imported after FeaturesModule, for 404 routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
