import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environmentConfig } from './environments/environment';

if (environmentConfig.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
