import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';

    _listFilter = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: ProductModel[] = [];
    products: ProductModel [] = [];

    constructor(private productService: ProductsService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
        this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';

        this.productService.getProducts()
            .subscribe({
                next: (products: any) => {
                    this.products = products;
                    this.filteredProducts = this.performFilter(this.listFilter);
                },
                error: err => this.errorMessage = err
            })
    }

    /* filter(data: string) {
        if (data) {
            this.filteredProducts = this.products.filter((product: ProductModel) => {
                return  product.productName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                        product.category.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                        product.price.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredProducts = this.products;
        }
    } */

    performFilter(filterBy: string): ProductModel[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: ProductModel) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
