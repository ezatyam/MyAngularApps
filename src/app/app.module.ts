import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicUserDetailComponent } from './basic-user-detail/basic-user-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { RegisterService } from './Shared/register.service';

import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
    { path: 'BasicUserDetail', component: BasicUserDetailComponent },
    { path: 'Registration', component: RegisterComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'News', component: NewsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BasicUserDetailComponent,
    RegisterComponent ,
    LoginComponent ,
    NewsComponent],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class Register { }
