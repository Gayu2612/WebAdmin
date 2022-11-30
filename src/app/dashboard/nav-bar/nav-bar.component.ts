import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public currentUser:any;

  constructor(private authService:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.currentUser =  JSON.parse(localStorage.getItem('currentUser')||'-')
    console.log('nav', this.currentUser);


  }
  Logout(){
  this.authService.Logout()
    this.router.navigateByUrl('/auth/login')
  }
}
