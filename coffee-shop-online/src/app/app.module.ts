import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterUserPageComponent } from './register-user-page/register-user-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{
  path:'register', component:RegisterUserPageComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
