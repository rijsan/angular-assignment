import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { carListComponent } from './Car-List/Car-List.component';
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [
    AppComponent,
    carListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
