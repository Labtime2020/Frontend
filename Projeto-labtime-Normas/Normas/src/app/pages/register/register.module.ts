import { SharedModuleModule } from './../../shared/shared-module.module';
import { FormDebugComponent } from './../../shared/form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [RegisterComponent,FormDebugComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControl,
    FormBuilder,
    SharedModuleModule,
    HttpModule
  ]
})
export class RegisterModule { }
