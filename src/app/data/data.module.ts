import {
  ModuleWithProviders, NgModule, OpaqueToken, Optional, SkipSelf, APP_INITIALIZER
} from '@angular/core';
import { HttpModule } from '@angular/http';

// Data Services
import { UsersDataService } from './data-services/users.data-service';

export function initializeUsers(usersDataService: UsersDataService) {
  return () => usersDataService.initialize();
}

@NgModule({
  imports: [ HttpModule ],
  declarations: [],
  providers: [],
  exports: []
})
export class DataModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataModule,
      providers: [
        UsersDataService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeUsers,
          deps: [ UsersDataService ],
          multi: true
        }
      ]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: DataModule) {
    if (parentModule) {
      throw new Error('DataModule is already loaded. Import it in the AppModule only');
    }
  }
}
