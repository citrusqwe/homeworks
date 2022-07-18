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
import {BookRoutingModule} from "./book-routing.module";
import {LayoutComponent} from "./layout/layout.component";
import {TableComponent} from './table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {DeepTableComponent} from './table/deep-table/deep-table.component';


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
    LayoutComponent,
    TableComponent,
    DeepTableComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatTableModule,
    MatExpansionModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [BookComponent, HeaderComponent]
})
export class BookModule {
}
