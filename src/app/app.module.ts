import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
    BrowserModule,
    NgxTypeaheadModule,
    HttpClientModule,
    HttpClientJsonpModule,
	HttpModule,FormsModule
  ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
 
platformBrowserDynamic().bootstrapModule(AppModule);