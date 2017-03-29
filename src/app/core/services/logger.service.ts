import { Injectable, Optional } from '@angular/core';

export enum LogLevel { OFF = 0, ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4, LOG = 5 }

export class LoggerOptions {
  level: LogLevel;
}

////////////////////

// For browsers that don't implement the debug method, log will be used instead.
const CONSOLE_DEBUG_METHOD = console['debug'] ? 'debug' : 'log';

const DEFAULT_OPTIONS: LoggerOptions = {
  level: LogLevel.WARN
};

@Injectable()
export class Logger {

  private currentLevel: LogLevel;
  public Level: any = LogLevel;

    ////////////////////

  constructor(@Optional() options?: LoggerOptions) {
    const { level } = Object.assign({}, DEFAULT_OPTIONS, options);
    this.currentLevel = level;
  }

  error(message?: any, ...optionalParams: any[]) {
    if (this.isErrorEnabled()) { console.error.apply(console, arguments); }
  }

  warn(message?: any, ...optionalParams: any[]) {
    if (this.isWarnEnabled()) { console.warn.apply(console, arguments); }
  }

  info(message?: any, ...optionalParams: any[]) {
    if (this.isInfoEnabled()) { console.info.apply(console, arguments); }
  }

  debug(message?: any, ...optionalParams: any[]) {
    if (this.isDebugEnabled()) { (<any> console)[CONSOLE_DEBUG_METHOD].apply(console, arguments); }
  }

  log(message?: any, ...optionalParams: any[]) {
    if (this.isLogEnabled()) { console.log.apply(console, arguments); }
  }

  ////////////////////

  isErrorEnabled = (): boolean => this.currentLevel >= LogLevel.ERROR;
  isWarnEnabled =  (): boolean => this.currentLevel >= LogLevel.WARN;
  isInfoEnabled =  (): boolean => this.currentLevel >= LogLevel.INFO;
  isDebugEnabled = (): boolean => this.currentLevel >= LogLevel.DEBUG;
  isLogEnabled =   (): boolean => this.currentLevel >= LogLevel.LOG;
}
