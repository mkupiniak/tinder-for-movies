import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {SharedMaterialComponentsModule} from './shared-material-components/shared-material-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TinderCardComponent} from './tinder-card/tinder-card.component';

import {TinderService} from './tinder.service';

import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        BrowserAnimationsModule,
        SharedMaterialComponentsModule
    ],
    declarations: [
        AppComponent,
        TinderCardComponent
    ],
    providers: [TinderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
