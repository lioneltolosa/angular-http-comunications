import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

import { ProductModel } from '../product';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private productsUrl = 'api/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<ProductModel> {
        return this.http.get<ProductModel>(this.productsUrl)
            .pipe(
                catchError(this.handleError)
            )
    }

    getProductsById(id: number): Observable<ProductModel> {
        if (id === 0) {
            return of(this.initializeProduct());
        }

        return this.http.get<ProductModel>(`${this.productsUrl}/${id}`)
            .pipe(
                /* tap(data => console.log('getProduct: ' + JSON.stringify(data))), */
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }

    private initializeProduct(): ProductModel {
        // Return an initialized object
        return {
            id: 0,
            productName: null,
            productCode: null,
            category: null,
            tags: [],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    }
}
