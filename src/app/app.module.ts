import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BookModule} from "./book/book.module";
import {AppRoutingModule} from "./app-routing.module";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
