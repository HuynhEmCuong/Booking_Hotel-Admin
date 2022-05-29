import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AuthorizationGuard } from 'src/app/core/guards/authorization.guard';
import { TaskReportResolver } from 'src/app/core/resolvers/requestTaskReport.resolver';
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