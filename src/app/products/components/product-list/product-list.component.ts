import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products: ProductModel;
    imageWidth = 50;
    imageMargin = 2;

    constructor(private productService: ProductsService) { }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(data => {
                this.products = data;
                console.log('Products', data)
            })
    }

}
