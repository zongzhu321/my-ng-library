import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestLibModule } from '@lib-app/test-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
