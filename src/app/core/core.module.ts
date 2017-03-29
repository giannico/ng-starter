import { ModuleWithProviders, NgModule, OpaqueToken, Optional, SkipSelf } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';

import { CollapseModule } from 'ng2-bootstrap/collapse';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { ModalModule } from 'ng2-bootstrap/modal';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster';

import { SelectivePreloadingStrategy } from './routing/selective-preloading-strategy';

import { Logger, LoggerOptions, LogLevel } from './services/logger.service';
import { Notifier } from './services/notifier.service';
import { ENVIRONMENT_CONFIG, Environment } from './services/environment.service';

import { EnvironmentConfig } from '../../environments/environment.config';

@NgModule({
  imports: [
    // vendor modules
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    DropdownModule.forRoot(),
    ToasterModule
  ],
  declarations: [],
  providers: [
    Logger,
    Notifier,
    Environment,
    SelectivePreloadingStrategy
  ],
  exports: [
    ToasterModule // exported so the main application can use the toaster-container component
  ]
})
export class CoreModule {

  static forRoot(environmentConfig: EnvironmentConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: ENVIRONMENT_CONFIG,
          useValue: environmentConfig
        },
        {
          provide: LoggerOptions,
          useValue: {
            level: environmentConfig.logLevel
          }
        },
        {
          provide: ROUTER_CONFIGURATION,
          useValue: {
            enableTracing: environmentConfig.enableRouterTracing,
            preloadingStrategy: SelectivePreloadingStrategy
          }
        }
      ]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
