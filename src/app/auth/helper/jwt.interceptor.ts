import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public basicAuth:any
  constructor(private authentication:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request);

    const token =localStorage.getItem('token')
    // const token = localStorage.getItem('token');
    this.basicAuth='basic'+("upturn:23423434asdfasdfasdfausopdfyap9ywrpwh34p24hp27304234234u")
    const isApiUrl= request.url.startsWith(environment.apiUrl)

       if(isApiUrl && token){
       request = request.clone({
        setHeaders:{
          Authorization:this.basicAuth,
          token: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
       })
      }else{
        request = request.clone({
          setHeaders:{
            Authorization:this.basicAuth,
            'Content-Type': 'application/json',
          }
         })
      }
    return next.handle(request);
  }
}
