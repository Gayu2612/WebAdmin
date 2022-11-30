import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';

const routes: Routes = [
 {
  path:'men',
  component:MenComponent
  },
  {
    path:'women',
    component:WomenComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
