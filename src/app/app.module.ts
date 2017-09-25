import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule, InputTextModule, ToolbarModule} from "primeng/primeng";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { MainComponent } from './components/main/main.component';
import {UsersModule} from "./modules/users/users.module";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        UsersModule,
        ToolbarModule,
        ButtonModule,
        InputTextModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
