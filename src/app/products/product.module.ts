import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ProductListComponent}
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductEditComponent
    ]
})
export class ProductModule { }
