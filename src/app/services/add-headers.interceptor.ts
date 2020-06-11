import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeadersInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`AddHeadersInterceptor ${request.url}`);

        let jsonReq: HttpRequest<any> = request.clone({
            setHeaders: {'Content-Type': 'application/json'}
        })

        return next.handle(jsonReq);
    }
}
