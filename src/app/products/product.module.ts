import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent},
            { path: 'products/:id', component: ProductDetailsComponent},
            { path: 'products/:id/edit', component: ProductEditComponent}
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductEditComponent
    ]
})
export class ProductModule { }
