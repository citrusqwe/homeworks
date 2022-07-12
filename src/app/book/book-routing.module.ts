import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FirstPageComponent} from "./pages/first-page/first-page.component";
import {SecondPageComponent} from "./pages/second-page/second-page.component";
import {ThirdPageComponent} from "./pages/third-page/third-page.component";
import {FourthPageComponent} from "./pages/fourth-page/fourth-page.component";
import {FifthPageComponent} from "./pages/fifth-page/fifth-page.component";
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  {path: '1', component: FirstPageComponent},
  {path: '2', component: SecondPageComponent},
  {path: '3', component: ThirdPageComponent},
  {path: '4', component: FourthPageComponent},
  {path: '5', component: FifthPageComponent},
  {path: 'table', component: TableComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
