import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private router: Router) {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (req.url.startsWith('http://www.angular.at')) {
            const headers = req.headers.set('Authorization', 'asfjsdfjjkjru==');
            req = req.clone({ headers });
        }

        return next.handle(req).pipe(
            catchError(resp => this.handleError(resp))
        );
    }

    handleError(resp: HttpErrorResponse): Observable<HttpEvent<any>> {

        if (resp.status === 401 || resp.status === 403) {
            this.router.navigate(['/home', {needsLogin: true}]);
        }
        return throwError(resp);

    }
}