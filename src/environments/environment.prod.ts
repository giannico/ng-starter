import { EnvironmentConfig } from './environment.config';
import { LogLevel } from '../app/core';

export const environmentConfig: EnvironmentConfig = {
  production: true,
  envName: 'prod',
  logLevel: LogLevel.WARN,
  enableRouterTracing: false,
};
