import { InjectionToken } from '@angular/core';

export class UtilsMatFormGroupLibConfig {
  key: string;

  constructor(key: string) {
    this.key = key;
  }
}

export const UTILS_MAT_FORM_GROUP_CONFIG =
  new InjectionToken<UtilsMatFormGroupLibConfig>('UTILS_MAT_FORM_GROUP_CONFIG');
