import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterUserPageComponent } from './register-user-page/register-user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
