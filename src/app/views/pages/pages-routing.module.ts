import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
const routes: Routes = [{
    path: '',
    component: PagesComponent,
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard],
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
           
        },
        {
            path: 'manager',
            loadChildren: () => import('./system/system.module')
            .then(m => m.SystemModule)
        },
        {
            path: 'article',
            loadChildren: () => import('./articles/article.module')
            .then(m => m.ArticleModule)
        },
        {
            path: 'room',
            loadChildren: () => import('./rooms/room.module')
            .then(m => m.RoomModule)
        },
        {
            path: 'resevation',
            loadChildren: () => import('./reservation/resevation.module')
            .then(m => m.ReservationModule)

        },
       
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: '**', redirectTo: 'dashboard' },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PagesRoutingModule {
}
