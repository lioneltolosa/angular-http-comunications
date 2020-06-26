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
      const id = +route.paramMap.get('id');

      return this.productService.getProductsById(id)
         .pipe(
            map(product => ({product: product })),
            catchError(err => of(err))
         )
   }
}
