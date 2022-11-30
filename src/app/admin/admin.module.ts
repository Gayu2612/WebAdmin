import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';
import { ClothViewComponent } from './components/cloth-view/cloth-view.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngb-modal';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
   ClothListComponent,
   ClothViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgSelectModule,
    NgbModalModule
  ]
})
export class AdminModule { }
