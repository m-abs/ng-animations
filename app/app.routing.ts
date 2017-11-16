import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BasicsComponent } from "./basics/basics.component";
import { ListComponent } from "./list/list.component";
import { NewPageComponent } from "./new-page.component";
import { RootComponent } from "./root.component";
import { TagComponent } from "./tag/tag.component";

const routes: Routes = [
    {
      path: "",
      pathMatch: "full",
      redirectTo: "/root/basics",
    },  {
      children: [
        // { path: '', redirectTo: '/list', pathMatch: 'full' },
        // { path: '', redirectTo: '/tag', pathMatch: 'full' },
        {
          component: BasicsComponent,
          data: {
            animation: "BasicsPage",
          },
          path: "basics",
        }, {
          component: ListComponent,
          data: {
            animation: "ListPage",
          },
          path: "list",
        }, {
          component: TagComponent,
          data: {
            animation: "TagPage",
          },
          path: "tag",
        },
      ],
      component: RootComponent,
      path: "root",
    }, {
      component: NewPageComponent,
      path: "new-page",
    },
];

@NgModule({
    exports: [NativeScriptRouterModule],
    imports: [NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
