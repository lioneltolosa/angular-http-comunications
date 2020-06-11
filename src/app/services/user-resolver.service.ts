import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.dataService.getAllUsers()
            .pipe(
                catchError(err => of(err))
            )
    }
}
