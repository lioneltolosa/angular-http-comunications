import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { UserError } from '../models/userError';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url = 'https://reqres.in'

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User[] | UserError> {
        return this.http.get<User[]>(`${this.url}/api/users`)
            .pipe(
                catchError(err => this.handlerHttpError(err))
            )
    }

    private handlerHttpError(error: HttpErrorResponse): Observable<UserError> {
        let dataError = new UserError();
        dataError.errorNumber = 100;
        dataError.message = error.statusText;
        dataError.friendlyMessage = 'An error occurred retrieving data.';
        return throwError(dataError)
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${this.url}/api/users/${id}`, {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'my-token'
            })
        })
    }

    createUser(newUser: User): Observable<User> {
        return this.http.post<User>(`${this.url}/api/users`, newUser, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        })
    }

    updateUser(updateUser: User): Observable<void> {
        return this.http.put<void>(`${this.url}/api/users`, updateUser, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        })
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/api/users/${id}`)
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
}
