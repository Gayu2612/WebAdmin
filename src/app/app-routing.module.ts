import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/helper/auth.guard';
import { MenuComponent } from './dashboard/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "dashboard",component:MenuComponent,canActivate:[AuthGuard],
    children:[
      {
        path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
      },
      {
        path:'user',loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
      }

    ]
    // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
