import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PeopleRoutingModule} from './people-routing.module';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        PeopleRoutingModule,
        DataTableModule,
        SharedModule
    ],
    declarations: [ListComponent, DetailComponent]
})
export class PeopleModule {
}
