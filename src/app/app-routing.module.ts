import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LayoutComponent} from "./book/layout/layout.component";

const routes: Routes = [
  {
    path: 'book', component: LayoutComponent, loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: '', redirectTo: 'book', pathMatch: 'full'
  },
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
