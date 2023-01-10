import { HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from 'rxjs';
import { LoginService } from "./login.service";

const Token_Header='Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{ 
    constructor(private login: LoginService){
    }
    intercept(req: HttpRequest<any>, next:HttpHandler) :Observable<HttpEvent<any>> {
            //add the jwt token which is stored in localstoage
            let authreq=req;
            const token=this.login.getToken();
            if(token!=null){    
                authreq=authreq.clone({
                    setHeaders : { Authorization : `Bearer ${token}` }, 
                });
            }
            return next.handle(authreq); 
        }
}
export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi : true,


    }
]