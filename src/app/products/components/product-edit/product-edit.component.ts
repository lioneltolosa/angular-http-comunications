import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

    //selectedProduct: ProductModel;

    pageTitle = 'Product Edit';
    errorMessage: string;

    product: ProductModel;

    constructor(private route: ActivatedRoute,
        private productService: ProductsService) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(
            params => {
                const id = +params.get('id');
                this.getProduct(id);
            }
        );
    }

    getProduct(id: number): void {
        this.productService.getProductsById(id).subscribe({
            next: product => this.onProductRetrieved(product),
            error: err => this.errorMessage = err
        });
    }

    onProductRetrieved(product: ProductModel): void {
        this.product = product;

        if (!this.product) {
            this.pageTitle = 'No product found';
        } else {
            if (this.product.id === 0) {
                this.pageTitle = 'Add Product';
            } else {
                this.pageTitle = `Edit Product: ${this.product.productName}`;
            }
        }
    }
}
