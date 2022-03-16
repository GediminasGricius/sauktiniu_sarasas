import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn:'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private userService:UserService ) { }
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Pradedu vykdyti HTTP uzklausa");

    if (this.userService.user!=null){
      let newReq=req.clone({
        headers:req.headers.append("authorization", "Basic "+btoa(this.userService.user.name +":"+this.userService.user.password))
      });
      return next.handle(newReq);
    }else{
      return next.handle(req);
    }
    
   
  }
}
