import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel, ProductResolved } from '../../product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    
    pageTitle = 'Product Detail';
    product: ProductModel;
    errorMessage: string;

    constructor(private productServive: ProductsService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        /* let id = +this.route.snapshot.params.id; */
        //const id = +this.route.snapshot.paramMap.get('id'); // el + es para convertirlo de string a numeric

        /* this.productServive.getProductsById(id)
        .subscribe({
            next: product => this.onProductRetrieved(product),
            error: err => this.errorMessage = err
        }) */;

        const resolvedData: ProductResolved = this.route.snapshot.data['resolveProducts'];
        console.log('Resolver Products', resolvedData)
        this.errorMessage = resolvedData.error;
        this.onProductRetrieved(resolvedData.product);
    }

    onProductRetrieved(product: ProductModel): void {
        this.product = product;

        if(this.product) {
            this.pageTitle = `Product Detail: ${this.product.productName}`;
        } else {
            this.pageTitle = 'No product found';
        }
    }

}
