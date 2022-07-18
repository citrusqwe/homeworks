import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LayoutComponent} from "./book/layout/layout.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {ChartComponent} from "./book/chart/chart.component";
import {TableComponent} from "./book/table/table.component";
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";

const data = {authGuardPipe: () => redirectUnauthorizedTo(['/auth'])}

const routes: Routes = [
  {
    path: 'auth', children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'book', component: LayoutComponent, loadChildren: () => import('./book/book.module').then(m => m.BookModule),
    canActivate: [AngularFireAuthGuard], data
  },
  {path: 'table', component: TableComponent, canActivate: [AngularFireAuthGuard], data},
  {path: 'chart', component: ChartComponent, canActivate: [AngularFireAuthGuard], data},
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
