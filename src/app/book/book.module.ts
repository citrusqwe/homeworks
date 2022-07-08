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
import {RouterModule} from "@angular/router";
import {LayoutComponent} from './layout/layout.component';
import {BookRoutingModule} from "./book-routing.module";


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
    BookRoutingModule
  ],
  exports: [BookComponent, NotFoundComponent]
})
export class BookModule {
}
