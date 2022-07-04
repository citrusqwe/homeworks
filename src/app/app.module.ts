import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { CamelNotationPipe } from './pipes/camel-notation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HighlightTextDirective,
    CamelNotationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
