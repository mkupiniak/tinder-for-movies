import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCardModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,

        MdCardModule,
        MdButtonModule
    ],
    exports: [
        MdCardModule,
        MdButtonModule
    ],
    declarations: []
})
export class SharedMaterialComponentsModule {
}
