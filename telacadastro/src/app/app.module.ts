import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule
} from "@angular/material";
import { ComponeteemailComponent } from './componeteemail/componeteemail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponenteNomeComponent } from './componente-nome/componente-nome.component';
import { ComponenteSenhaComponent } from './componente-senha/componente-senha.component';

@NgModule({
  declarations: [AppComponent, ComponeteemailComponent, ComponenteNomeComponent, ComponenteSenhaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
