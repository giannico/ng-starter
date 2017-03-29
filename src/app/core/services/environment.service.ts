import { Inject, OpaqueToken } from '@angular/core';

import { EnvironmentConfig } from '../../../environments/environment.config';

export const ENVIRONMENT_CONFIG = new OpaqueToken('app.environmentConfig');

export class Environment {
  constructor(@Inject(ENVIRONMENT_CONFIG) public readonly config: EnvironmentConfig) {}
}
