import { SharedModuleModule } from './../../shared/shared-module.module';
import { FormDebugComponent } from './../../shared/form-debug/form-debug.component';
import { ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LoginComponent,FormDebugComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControl,
    FormBuilder,
    SharedModuleModule
  ]
})
export class LoginModule { }
