import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from "./pagination/pagination.component";
import {BookComponent} from './book/book.component';
import {HeaderComponent} from "./header/header.component";
import {FirstPageComponent} from './pages/first-page/first-page.component';
import {SecondPageComponent} from './pages/second-page/second-page.component';
import {ThirdPageComponent} from './pages/third-page/third-page.component';
import {FourthPageComponent} from './pages/fourth-page/fourth-page.component';
import {FifthPageComponent} from './pages/fifth-page/fifth-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: 'book', component: LayoutComponent, children: [
      {
        path: '1', component: FirstPageComponent
      }, {
        path: '2', component: SecondPageComponent
      }, {
        path: '3', component: ThirdPageComponent
      }, {
        path: '4', component: FourthPageComponent
      }, {
        path: '5', component: FifthPageComponent
      },
      {
        path: '', redirectTo: '1', pathMatch: 'full'
      },
    ]
  },
  {
    path: '', redirectTo: 'book', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    PaginationComponent,
    BookComponent,
    HeaderComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    NotFoundComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [BookComponent, NotFoundComponent]
})
export class BookModule {
}
