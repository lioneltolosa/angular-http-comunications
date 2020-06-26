import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { ProductsResolverService } from './services/products-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent},
            { path: 'products/:id', component: ProductDetailsComponent, resolve: {resolveProducts: ProductsResolverService}},
            { path: 'products/:id/edit', component: ProductEditComponent, resolve: {resolveProducts: ProductsResolverService}}
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductEditComponent
    ]
})
export class ProductModule { }
