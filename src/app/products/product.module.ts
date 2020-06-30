import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductEditInfoComponent } from './components/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './components/product-edit-tags/product-edit-tags.component';

import { SharedModule } from '../shared/shared.module';

import { ProductsResolverService } from './services/products-resolver.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'products', 
                //component: ProductListComponent,
                children: [
                    {
                        path: '',
                        component: ProductListComponent
                    },
                    { 
                        path: ':id', 
                        component: ProductDetailsComponent, 
                        resolve: {resolveProducts: ProductsResolverService}
                    },
                    { 
                        path: ':id/edit',
                        component: ProductEditComponent, 
                        resolve: {resolveProducts: ProductsResolverService},
                        children: [
                            {
                                path: '', 
                                redirectTo: 'info', 
                                pathMatch: 'full'
                            },
                            {
                                path: 'info',
                                component: ProductEditInfoComponent
                            },
                            {
                                path: 'tags',
                                component: ProductEditTagsComponent
                            }
                        ]
                    }
                ]
            },
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductEditComponent,
        ProductEditInfoComponent,
        ProductEditTagsComponent
    ]
})
export class ProductModule { }
