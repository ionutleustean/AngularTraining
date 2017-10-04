import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PeopleRoutingModule} from './people-routing.module';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {ButtonModule, DataTableModule, DropdownModule, InputTextModule, SharedModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {UrlBuilderService} from './services/url-builder.service';
import {PeopleService} from './services/people.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PeopleRoutingModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
        HttpClientModule,
        DropdownModule,
        FormsModule,
        InputTextModule
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
