import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {ButtonModule} from "primeng/primeng";

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        ButtonModule
    ],
    declarations: [ListComponent, DetailComponent]
})
export class UsersModule {
}
