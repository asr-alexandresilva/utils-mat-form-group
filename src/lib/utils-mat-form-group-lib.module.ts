import { ModuleWithProviders, NgModule } from "@angular/core";
import {
  UTILS_MAT_FORM_GROUP_CONFIG,
  UtilsMatFormGroupLibConfig,
} from "./model/utils-mat-form-group-lib-config";
import { UtilsMatFormGroupLibService } from "./utils-mat-form-group-lib.service";

@NgModule({
  declarations: [],
  imports: [],
  exports: [UtilsMatFormGroupLibService],
})
export class UtilsMatFormGroupLibModule {
  static forRoot(
    config: UtilsMatFormGroupLibConfig
  ): ModuleWithProviders<UtilsMatFormGroupLibModule> {
    return {
      ngModule: UtilsMatFormGroupLibModule,
      providers: [
        UtilsMatFormGroupLibService,
        {
          provide: UTILS_MAT_FORM_GROUP_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
