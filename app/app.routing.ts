import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { ListComponent } from './list/list.component';
import { TagComponent } from './tag/tag.component';
import { RootComponent } from './root.component';
import { NewPageComponent } from './new-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/root/basics', pathMatch: 'full' },
    {
      path: 'root',
      component: RootComponent,
      children: [
        // { path: '', redirectTo: '/list', pathMatch: 'full' },
        // { path: '', redirectTo: '/tag', pathMatch: 'full' },
        { path: 'basics', component: BasicsComponent, data: { animation: 'BasicsPage' } },
        { path: 'list', component: ListComponent, data: { animation: 'ListPage' } },
        { path: 'tag', component: TagComponent, data: { animation: 'TagPage' } },
      ]
    }, {
      path: 'new-page',
      component: NewPageComponent,
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
