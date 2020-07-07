import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompaniesDetailsComponent } from './components/companies-details/companies-details.component';

const routes: Routes = [
    { 
        path: '', 
        component: CompaniesListComponent
    },
    { 
        path: ':id', 
        component: CompaniesDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompaniesRoutingModule { }
