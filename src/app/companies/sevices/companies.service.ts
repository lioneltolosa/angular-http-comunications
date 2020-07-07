import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Models
import { Companie } from '../models/companie';
import { CompanieError } from '../models/companieError';

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {

    private url = `http://localhost:5000`;

    constructor(private http: HttpClient) { }

    getCompanies(): Observable<Companie[] | CompanieError > {
        return this.http.get<Companie[]>(`${this.url}/api/`)
            .pipe(
                catchError(err => this.handlerHttpError(err))
            )
    }

    getCompaniesById(id: number): Observable<Companie> {
        return this.http.get<Companie>(`http://localhost:5000/api/${id}`, {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'my-token'
            })
        })
        
    }

    private handlerHttpError(error: HttpErrorResponse): Observable<CompanieError> {
        let dataError = new CompanieError();
        dataError.errorNumber = 100;
        dataError.message = error.statusText;
        dataError.friendlyMessage = 'An error occurred retrieving data.';
        return throwError(dataError)
    }
}
