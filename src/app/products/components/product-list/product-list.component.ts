import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products: any;
    imageWidth = 50;
    imageMargin = 2;

    filteredProducts: ProductModel[] = [];

    constructor(private productService: ProductsService) { }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(data => {
                this.products = data;
                console.log('Products', data)
            })
    }

    filter(data: string) {
        if (data) {
            this.filteredProducts = this.products.filter((product: ProductModel) => {
                return  product.productName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                        product.category.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                        product.price.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredProducts = this.products;
        }
    }
}
