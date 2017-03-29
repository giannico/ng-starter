import { LogLevel } from '../app/core';

export interface EnvironmentConfig {
  production: boolean;
  envName: string;
  logLevel: LogLevel;
  enableRouterTracing: boolean;
}
