import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }

  public login: Login = new Login();
  public logintype: any;

  ngOnInit(): void {
    console.log('kkkk');

    this.logintype = localStorage.getItem('logintype')
    console.log('logintypee', this.logintype);

  }
  postLogin() {
    // console.log('kkkk');

    // let details = {
    //   email: this.login.email,
    //   password: this.login.password,
    //   imageUrl:this.login.imageUrl
    // }
    this.authservice.postLogin(this.login).subscribe((res: any) => {
      console.log('login', res);
      if (res?.result?.loginType == 'admin') {
        this.router.navigateByUrl('/dashboard/admin/clothlist')
      } else {
        this.router.navigateByUrl('/dashboard/user')
      }

    })
    // this.toastr.success('Sucessfully Login')

  }

}
