import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { AlertService } from './core/services/notification/alert.service';
import { UserService } from './services/user.service';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { RegisterComponent } from './pages/register/register.component';
import { TesteComponent } from './teste/teste.component';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModuleModule } from './shared/shared-module.module';
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
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  
  ],
  providers: [UserService,AlertService,ToastrService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
