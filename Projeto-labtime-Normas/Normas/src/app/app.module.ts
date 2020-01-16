import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './pages/register/register.component';
import { TesteComponent } from './teste/teste.component';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import {ToastrModule} from 'ngx-toastr';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TesteComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
