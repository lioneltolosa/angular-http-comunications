import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from '../../product';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-edit-info',
    templateUrl: './product-edit-info.component.html',
    styleUrls: ['./product-edit-info.component.scss']
})
export class ProductEditInfoComponent implements OnInit {

    @ViewChild(NgForm, { static: false }) productForm: NgForm;

    errorMessage: string;
    product: ProductModel;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.parent.data.subscribe(data => {
            if (this.productForm) {
                this.productForm.reset();
            }

            this.product = data['resolveProducts'].product;
        });
    }
}
