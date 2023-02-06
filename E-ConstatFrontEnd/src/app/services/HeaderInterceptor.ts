import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.indexOf('/authenticate')===-1 && req.url.indexOf('/forgot_password')===-1){
            console.log(req.url);
            const headers={
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('access_token')
            };
            const request =req.clone({ setHeaders:headers});
            return next.handle(request);
        }
        
        return next.handle(req);
    }

}