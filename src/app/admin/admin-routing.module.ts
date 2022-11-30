import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothViewComponent } from './components/cloth-view/cloth-view.component';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';

const routes: Routes = [
  {
    path:'clothlist',
    component:ClothListComponent
  },
  {
    path:'clothview',
    component:ClothViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
