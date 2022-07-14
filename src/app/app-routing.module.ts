import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LayoutComponent} from "./book/layout/layout.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {ChartComponent} from "./chart/chart.component";

const routes: Routes = [
  {
    path: 'book', component: LayoutComponent, loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'auth', children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  },
  {path: 'chart', component: ChartComponent},
  {
    path: '**', component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
