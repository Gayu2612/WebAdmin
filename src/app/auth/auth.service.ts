import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from './model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl +'/register';
  private baseUrl1 = environment.apiUrl +'/login';

   private currentUserSubject: BehaviorSubject<Login>;
   public currentUser:Observable<Login>

  public Userdetails: any;
  // public isLoggedin: any;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser') || '"-"'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  postRegister(data:any){
    return this.http.post(`${this.baseUrl}`,data)
  }
  postLogin(data:any){
    return this.http.post(`${this.baseUrl1}`,data).pipe(map((res:any)=>{

      // console.log('res',res);

//       this.UserDetails=res?.result?.userDetails;

// console.log('UserDetails',this.UserDetails);

      if(res && res.result.token){
        // console.log('res',res);
        this.Userdetails= res?.result?.userDetails        ;

        console.log('UserDetails',  this.Userdetails);
        localStorage.setItem('logintype',res?.result?.loginType)
        localStorage.setItem('token',res.result?.token);
        localStorage.setItem('currentUser',JSON.stringify(res.result?.userDetails))
        localStorage.setItem('logged','true')
        let name = this.Userdetails?.userName
        this.currentUserSubject.next(this.Userdetails);
      }
      return res;
    }))
  }

  Logout(){
    localStorage.removeItem('currentUser')
    // localStorage.removeItem('logintype')
    localStorage.removeItem('token')
    localStorage.removeItem('logged')

  }

  authenticated(){
    return !!localStorage.getItem('logged')
  }
}
