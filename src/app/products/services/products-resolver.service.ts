import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductResolved } from '../product';
import { ProductsService } from './products.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class ProductsResolverService implements Resolve<ProductResolved>{

   constructor(private productService: ProductsService) { }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
      const id = route.paramMap.get('id');

      if(isNaN(+id)) {
         const message = `Product is was not a number: ${id}`;
         console.error(message);
         return of({ product: null, error: message });
      }

      return this.productService.getProductsById(+id)
         .pipe(
            map(product => ({product: product })),
            catchError(err => {
               const message = `Retrieval error: ${err}`;
               console.error(message);
               return of({ product: null, error: message });
            })
         )
   }
}
