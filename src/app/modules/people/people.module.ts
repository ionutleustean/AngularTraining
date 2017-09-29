import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PeopleRoutingModule} from './people-routing.module';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {ButtonModule, DataTableModule, DropdownModule, SharedModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {UrlBuilderService} from './services/url-builder.service';
import {PeopleService} from './services/people.service';

@NgModule({
    imports: [
        CommonModule,
        PeopleRoutingModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
        HttpClientModule,
        DropdownModule
    ],
    declarations: [
        ListComponent,
        DetailComponent
    ],
    providers: [
        UrlBuilderService,
        PeopleService
    ]
})
export class PeopleModule {
}
