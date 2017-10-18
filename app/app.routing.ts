import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { ListComponent } from './list/list.component';
import { TagComponent } from './tag/tag.component';


const routes: Routes = [
    { path: '', redirectTo: '/basics', pathMatch: 'full' },
    // { path: '', redirectTo: '/list', pathMatch: 'full' },
    // { path: '', redirectTo: '/tag', pathMatch: 'full' },
    { path: 'basics', component: BasicsComponent, data: { animation: 'BasicsPage' } },
    { path: 'list', component: ListComponent, data: { animation: 'ListPage' } },
    { path: 'tag', component: TagComponent, data: { animation: 'TagPage' } }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }