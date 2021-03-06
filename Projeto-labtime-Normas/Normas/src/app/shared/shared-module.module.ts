import { FormDebugComponent } from "./form-debug/form-debug.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampoControlErroComponent } from "./campo-control-erro/campo-control-erro.component";

@NgModule({
  declarations: [FormDebugComponent, CampoControlErroComponent],
  imports: [CommonModule,SharedModuleModule],
  exports: [FormDebugComponent, CampoControlErroComponent]
})
export class SharedModuleModule {}
