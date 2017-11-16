import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { NativeScriptAnimationsModule } from "nativescript-angular/animations";

import { BasicsComponent } from "./basics/basics.component";
import { ListComponent } from "./list/list.component";
import { NewPageComponent } from "./new-page.component";
import { RootComponent } from "./root.component";
import { TagComponent } from "./tag/tag.component";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        BasicsComponent,
        ListComponent,
        TagComponent,
        RootComponent,
        NewPageComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        // Import NativeScript Animations Module
        NativeScriptAnimationsModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
