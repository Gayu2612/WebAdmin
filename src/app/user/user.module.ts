import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';


@NgModule({
  declarations: [
MenComponent,
WomenComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
