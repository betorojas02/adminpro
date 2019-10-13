import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';



const  pagesRputes : Routes = [

    { path: '', component: PagesComponent,
    children:[
        { path: 'dashboard', component: DashboardComponent},
        { path: 'progress', component: ProgressComponent},
        { path: 'graficas1', component: Graficas1Component},
        { path: 'account-settings', component: AccoutSettingComponent},
        { path: '', redirectTo: '/dashboard',pathMatch:'full'},
    ]},
  

]


export const PAGES_ROUTES = RouterModule.forChild(pagesRputes);