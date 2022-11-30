import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   public opened = true;

  constructor() { }

  ngOnInit(): void {
    console.log("cccc",this.opened);

  }

}
