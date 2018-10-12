import { NgModule } from '@angular/core';

import { DemojhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DemojhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DemojhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DemojhipsterSharedCommonModule {}
