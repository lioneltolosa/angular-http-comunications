import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompaniesDetailsComponent } from './components/companies-details/companies-details.component';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CompaniesListComponent,
        CompaniesDetailsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CompaniesRoutingModule
    ]
})
export class CompaniesModule { }
