import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginModule} from '../login/login.module';
import {RegisterModule} from '../register/register.module';

import {TheEntryComponent} from './theentry.component';

@NgModule({
    imports: [
        CommonModule,
        LoginModule,
        RegisterModule
    ],
    declarations: [
        TheEntryComponent
    ],
    exports: [
        TheEntryComponent,
        LoginModule,
        RegisterModule
    ]
})

export class TheEntryModule {}
