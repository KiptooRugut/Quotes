import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { TimeCountPipe } from './time-count.pipe';
import { HighlighterDirective } from './highlight.directive';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesFormComponent,
    QuotesDetailComponent,  
    TimeCountPipe,
    HighlighterDirective,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
