import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    
    pageTitle = 'Product Detail';
    product: ProductModel;

    constructor(private productServive: ProductsService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params.id;

        this.productServive.getProductsById(id)
            .subscribe(productDetails => {
                console.log('productDetails', productDetails);
                this.product = productDetails
            })
    }

}
