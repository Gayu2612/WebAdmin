import { Component, OnInit } from '@angular/core';
import { Admin, User } from 'src/app/menu/menu';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  public logintype:any;
  public adminSection=Admin;
  public userSection=User;
  constructor() { }

  ngOnInit(): void {
    this.logintype = localStorage.getItem('logintype')
    console.log('logintypee',this.logintype);  }


}
