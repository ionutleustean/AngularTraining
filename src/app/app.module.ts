import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule, InputTextModule, ToolbarModule} from "primeng/primeng";
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from './components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ToolbarModule,
        ButtonModule,
        InputTextModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
